import Completion from "./Completion";

import categoryPrompts from "../data/prompts/category-specific";
import generateDataPrompt from "../data/prompts/generate-data";
import { getFewShotExamples, selectAttitudes } from "./v6_utils";
import examples from "../data/few_shot_examples";

const temp = 0.9;
const freqPenalty = 0.6;
const presPenalty = 0.5;

export default async function generateResult(statement: string, uuid: string) {
  const attitudes = selectAttitudes();

  const sentiment = await getSentiment(statement);

  const fewShotExamples = getFewShotExamples(sentiment, attitudes);

  const prompt = formGenerationPrompt(
    statement,
    attitudes.slice(10, 15),
    fewShotExamples
  );

  console.log(prompt);

  // // 3. call GPT-3
  const replies = await getReplies(prompt);

  const evalPrompt = formInitialEvalPrompt(statement, fewShotExamples);
  console.log(evalPrompt);

  const evaluations = await evalGeneratedReplies(evalPrompt, replies);
  console.log(evaluations);

  // 5. return data
  let good_replies: any[] = [];
  let bad_replies: any[] = [];

  evaluations.forEach((e: any, idx: number) => {
    const ex = {
      reply: replies[idx],
      isGoodReply: e.isGoodReply,
      explanation: e.explanation,
      category: "None",
    };
    if (ex.isGoodReply) good_replies.push(ex);
    else bad_replies.push(ex);
  });

  return {
    id: uuid,
    statement: statement,
    good_replies: good_replies,
    bad_replies: bad_replies,
  };
}

async function evalGeneratedReplies(prompt: string, replies: string[]) {
  let runningPrompt = prompt;

  let evaluations: any[] = [];

  for (const [idx, reply] of replies.entries()) {
    runningPrompt += `(${idx + 1}) I replied, "${reply}"\nFeedback:`;

    let explanation = "";
    let isGoodReply = false;
    let numApiCalls = 0;
    while (numApiCalls < 3) {
      let result = await Completion({
        model: "text-davinci-002",
        prompt: runningPrompt,
        temperature: temp,
        max_tokens: 60,
        frequency_penalty: freqPenalty,
        presence_penalty: presPenalty,
      });
      numApiCalls++;

      result = result.trim().split("\n")[0];

      if (result.includes("Good reply.") || result.includes("Bad reply.")) {
        explanation = result.split("reply.")[1].trim();
        isGoodReply = result.includes("Good reply.");

        console.log(isGoodReply, explanation);
        break;
      } else {
        console.log(
          "Regenerating evaluation because it does not contain rating:"
        );
        console.log(result);
      }

      runningPrompt += result + "\n";
    }

    if (explanation == "") {
      explanation = "Oops! Noora could not properly generate an explanation.";
    }
    evaluations.push({ isGoodReply: isGoodReply, explanation: explanation });
  }

  return evaluations;
}

function formInitialEvalPrompt(statement: string, fewShotExamples: any[]) {
  let prompt = "";

  fewShotExamples.forEach((ex) => {
    prompt += `You said, "${ex["statement"]}"\n`;

    Object.values(ex["replies"]).forEach((reply: any, idx: number) => {
      prompt += `(${idx + 1}) I replied, "${reply["reply"]}"\n`;
      prompt += `Feedback: ${capFirst(reply["rating"].trim())} reply. ${
        reply["explanation"]
      }\n`;
    });
    prompt += "\n";
  });

  // unseen statement
  prompt += `You said, "${statement}"\n`;
  return prompt;
}

async function getReplies(prompt: string) {
  let response = await Completion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: temp,
    max_tokens: 1000,
    frequency_penalty: freqPenalty,
    presence_penalty: presPenalty,
  });

  const raw_replies = response.trim().split("\n");
  let replies: string[] = [];

  raw_replies.forEach((r: any) => {
    if (r.includes("you reply,")) {
      replies.push(r.split("you reply,")[1].trim().replace('"', ""));
    } else {
      console.log("Generated reply thrown out because format is incorrect:");
      console.log(r);
    }
  });

  return replies;
}

function formGenerationPrompt(
  statement: string,
  attitudes: string[],
  fewShotExamples: any[]
) {
  let prompt = "";

  fewShotExamples.forEach((ex) => {
    prompt += `I say, "${ex["statement"]}"\n`;
    prompt += "Give me 10 different replies of the following attitudes: ";

    prompt +=
      ex["attitudes"]
        .map((a: string, i: number) => `(${i + 1}) ${a}`)
        .join(", ") + ".\n";
    Object.values(ex["replies"]).forEach((reply: any, idx: number) => {
      prompt += `(${idx + 1}) To be ${reply["attitude"]}, you reply, "${
        reply["reply"]
      }"\n`;
    });

    prompt += "\n";
  });

  // unseen statement
  prompt += `I say, "${statement}"\n`;
  prompt += "Give me 10 different replies of the following attitudes: ";
  prompt +=
    attitudes.map((a: string, i: number) => `(${i + 1}) ${a}`).join(", ") + ".";

  return prompt;
}

async function getSentiment(statement: string) {
  const prompt = `Is this statement positive, negative, or neutral?\r\n"My sister and I just got into a fight." => negative\r\n"I just finished a really good book." => positive\r\n"I watched a movie last night." => neutral\r\n"${statement}" =>`;

  console.log(prompt);

  let response = await Completion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0,
    max_tokens: 3,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  let sentiment = response.trim().split(" ")[0];

  if (["positive", "neutral", "negative"].indexOf(sentiment) == -1) {
    console.log("Could not identify sentiment. Assuming neutral.");
    return "neutral";
  }

  return sentiment;
}

function capFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import Completion from "./Completion";

import categoryPrompts from "../data/prompts/category-specific";
import generateDataPrompt from "../data/prompts/generate-data";
import { getFewShotExamples, selectAttitudes } from "./v6_utils";

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

  console.log(replies);

  // // 4. parse examples
  // let responses: any[] = [];
  // reply.split("\n").forEach((r: string) => {
  //   let example = {};
  //   try {
  //     // example = parseExStr(r);
  //     responses.push(example);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });

  // 5. return data
  let good_replies: any[] = [];
  let bad_replies: any[] = [];

  // responses.forEach((r) => {
  //   if (r.rating && r.reply && r.explanation)
  //     if (r.rating == "Good answer.") good_replies.push(r);
  //     else bad_replies.push(r);
  // });

  return {
    id: uuid,
    statement: statement,
    good_replies: good_replies,
    bad_replies: bad_replies,
  };
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
      replies.push(r.split("you reply,")[1].trim());
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

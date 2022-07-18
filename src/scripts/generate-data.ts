import Completion from "./Completion";

import categoryPrompts from "../data/prompts/category-specific";
import generateDataPrompt from "../data/prompts/generate-data";

const temp = 0.9;
const freqPenalty = 0.5;
const presPenalty = 0.25;

export default async function generateResult(statement: string) {
  // 1. generate intermediate examples
  // 2. construct final prompt
  // 3. parse examples
  // 4. return data
  let reply = await Completion({
    model: "text-davinci-002",
    prompt: statement,
    temperature: 0.95,
    max_tokens: 200,
    frequency_penalty: 0.5,
    presence_penalty: 0.25,
  });

  console.log(reply);

  return {
    statement: statement,
    replies: [
      {
        reply: reply,
        category: "example category",
        good_answer: true,
      },
    ],
  };
}

export async function generateIntermediateExamples(statement: string) {
  // 1. randomly pick categories
  let index1 = Math.floor(Math.random() * categoryPrompts.length);
  let index2 = index1;
  while (index2 == index1)
    index2 = Math.floor(Math.random() * categoryPrompts.length);
  let categories = [categoryPrompts[index1], categoryPrompts[index2]];

  let intermediateExamples = ["", ""];
  // 2. create few-shot examples for the final prompt
  for (const [idx, c] of categories.entries()) {
    let intermediate = await getIntermediate(statement, c.category, c.prompt);
    intermediateExamples[idx] = intermediate;
  }

  return intermediateExamples;
}

async function getIntermediate(
  statement: string,
  category: string,
  template: string
) {
  let prompt = template.replace("{s}", statement);

  let intermediate = "";
  let reply = "";
  while (true) {
    reply = await Completion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: temp,
      max_tokens: 200,
      frequency_penalty: freqPenalty,
      presence_penalty: presPenalty,
    });

    if (isProperFormat(reply, true)) break;
    else
      console.log(
        "Regenerating intermediate response because format is incorrect."
      );
  }

  intermediate = capitalizeFirst(category) + ": " + capitalizeFirst(reply);
  return intermediate;
}

export function isProperFormat(exStr: string, strict: boolean) {
  // strict is for generating intermediate examples
  // intermediate examples are the few-shot examples for the final generation prompt, so must follow one format
  let dialoguePhrase = null;
  let acceptablePhrases = strict
    ? ["So you reply,"]
    : [
        "So you reply,",
        ", so you reply,",
        "so you reply",
        "So you reply",
        ", so you say,",
        "so you say,",
        "So you say,",
        ", and you reply,",
        "and you reply,",
        "So youreply,",
        "You reply,",
        "You reply with,",
      ];
  acceptablePhrases.every((dialogueStr) => {
    if (exStr.includes(dialogueStr)) {
      dialoguePhrase = dialogueStr;
      return false;
    }
    return true;
  });

  if (!dialoguePhrase) {
    console.log(
      "Generated example does not contain proper dialogue phrase:\n" + exStr
    );
    return false;
  }

  let ratingStr = null;
  let rating = "";
  acceptablePhrases = strict
    ? ["Good answer."]
    : [
        "Good answer.",
        "Good answer!",
        "Good answer;",
        "This is a good reply because",
        "This is a good answer because",
        "This is a good answer.",
      ];
  acceptablePhrases.every((positiveRatingStr) => {
    if (exStr.includes(positiveRatingStr)) {
      ratingStr = positiveRatingStr;
      rating = "Good answer.";
      return false;
    }
    return true;
  });

  acceptablePhrases = strict
    ? ["Bad answer."]
    : [
        "Bad answer.",
        "Bad answer;",
        "Bad answer!",
        "Wrong answer.",
        "Not a good answer.",
        "This is a bad reply because",
        "This is a bad answer because",
        "This is a bad answer.",
      ];
  acceptablePhrases.every((negativeRatingStr) => {
    if (exStr.includes(negativeRatingStr)) {
      ratingStr = negativeRatingStr;
      rating = "Bad answer.";
      return false;
    }
    return true;
  });

  if (!ratingStr) {
    console.log(
      "Generated example does not contain a proper answer rating:\n" + exStr
    );
    return false;
  }

  let ratingIdx = exStr.indexOf(ratingStr);
  let explanation = exStr.slice(ratingIdx + rating.length, exStr.length).trim();
  if (explanation === "") {
    console.log(
      "Generated example does not contain an explanation for the reply rating:\n" +
        exStr
    );
    return false;
  }

  return {
    proper_format: true,
    dialoguePhrase: dialoguePhrase,
    rating: rating,
    ratingStr: ratingStr,
  };
}

export function parseExStr(
  category: string,
  statement: string,
  ex_str: string
) {
  let example = {
    statement_category: category,
    statement: statement,
    category: "",
    reasoning: "",
    reply: "",
    rating: "",
    explanation: "",
  };

  return "";
}

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

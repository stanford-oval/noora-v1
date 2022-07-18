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

export function generateIntermediateExamples(statement: string) {
  // 1. randomly pick categories
  let index1 = Math.floor(Math.random() * categoryPrompts.length);
  let index2 = index1;
  while (index2 == index1)
    index2 = Math.floor(Math.random() * categoryPrompts.length);
  let categories = [categoryPrompts[index1], categoryPrompts[index2]];

  // 2. 
}

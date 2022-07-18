import Completion from "./Completion";
import categoryPrompts from "../data/prompts/category-specific";

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
  console.log("Generating 2 intermediate examples for: " + statement);

  console.log(categoryPrompts);
}

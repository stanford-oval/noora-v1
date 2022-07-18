import Completion from "./Completion";

const temp = 0.9;
const freq_penalty = 0.5;
const pres_penalty = 0.25;

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

async function generateIntermediateExamples(statement: string) {
  
}

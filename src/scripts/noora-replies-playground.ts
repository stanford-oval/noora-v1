import Completion from "./gpt-3";

export default async function generateResult(statement: string) {
  let reply = await Completion(
    "text-davinci-002",
    "Write a tagline for an ice cream shop.",
    0.95,
    200,
    0.5,
    0.25
  );
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

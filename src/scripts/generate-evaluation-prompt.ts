import evalPrompts from "../data/prompts/noora-eval";

export default function formPrompt(
  statement: string,
  category: string,
  reply: string
) {
  let prompt = evalPrompts[category.split("/")[1] as keyof typeof evalPrompts];

  prompt += `\n\nYou said, "${statement}"\n(1) ${reply}\nFeedback:`;

  return prompt;
}

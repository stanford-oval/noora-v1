import evalPrompts from "../../data/prompts/noora-eval";

export default function formPrompt(
  statementObj: any,
  reply: string
) {
  const statement = statementObj.val.text;
  const sentiment = statementObj.val.sentiment[0]
  let prompt = "";

  prompt = (statementObj.val.task_type === "old") ? evalPrompts["old"][sentiment as keyof typeof evalPrompts["old"]] : evalPrompts["new"][statementObj.val.task_name as keyof typeof evalPrompts["new"]];
  console.log(`sentiment is ${sentiment}`)
  console.log(evalPrompts["old"][sentiment as keyof typeof evalPrompts["old"]])

  prompt += `\n\nYou said, "${statement}"\r\n(1) ${reply}\r\nFeedback:`;

  console.log(`PROMPT IS ${prompt}`);
  return prompt;
}

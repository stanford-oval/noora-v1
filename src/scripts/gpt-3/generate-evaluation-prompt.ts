import evalPrompts from "../../data/prompts/noora-eval";

export default function formPrompt(
  statementObj: any,
  reply: string
) {
  const statement = statementObj.val.text;
  let prompt = "";

  prompt = (statementObj.val.task_type === "old") ? evalPrompts["old"][statementObj.val.sentiment] : evalPrompts["new"][statementObj.val.task_name];


  prompt += `\n\nYou said, "${statement}"\n(1) ${reply}\nFeedback:`;
  console.log(prompt);

  return prompt;
}

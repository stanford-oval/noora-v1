export default function formPrompt(
  statement: string,
  category: string,
  reply: string
) {
  let prompt = '"' + statement + '"\nYou reply, "' + reply + '"';

  console.log("### Prompt: " + prompt);

  console.log(category);

  return prompt;
}

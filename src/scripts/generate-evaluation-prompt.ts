import { selectAttitudes, getFewShotExamples } from "./v6_utils";

export default function formPrompt(
  statement: string,
  category: string,
  reply: string
) {
  const attitudes = selectAttitudes();

  // console.log(attitudes);

  const fewShotExamples = getFewShotExamples(category.split("/")[1], attitudes);
  // console.log(fewShotExamples);

  const prompt = formEvalPrompt(statement, reply, fewShotExamples);

  return prompt;
}


function formEvalPrompt(
  statement: string,
  reply: string,
  fewShotExamples: any[]
) {
  let prompt = "";

  fewShotExamples.forEach((ex) => {
    console.log(ex);
    prompt += `You said, "${ex["statement"]}"\n`;
    Object.values(ex["replies"]).forEach((reply: any, idx: number) => {
      console.log(Object.keys(ex["replies"])[idx]);
      prompt += `(${idx + 1}) I replied, "${reply["reply"]}"\n`;
      prompt += `Feedback: ${capFirst(reply["rating"].trim())} reply. ${
        reply["explanation"]
      }\n`;
    });
    prompt += "\n";
  });

  // unseen statement
  prompt += `You said, "${statement}"\n(1) ${reply}\nFeedback:`;
  return prompt;
}

function capFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

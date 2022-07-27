import examples, {
  attitudes as all_attitudes,
} from "../data/few_shot_examples";

export default function formPrompt(
  statement: string,
  category: string,
  reply: string
) {
  const attitudes = selectAttitudes(all_attitudes.slice());
  // console.log(attitudes);

  const fewShotExamples = getFewShotExamples(category.split("/")[1], attitudes);
  // console.log(fewShotExamples);

  const prompt = formEvalPrompt(statement, reply, fewShotExamples);
  console.log(prompt);

  return prompt;
}

function selectAttitudes(all_attitudes_copy: string[]) {
  let attitudes = [];

  while (all_attitudes_copy.length) {
    var randomIndex = Math.floor(Math.random() * all_attitudes_copy.length),
      element = all_attitudes_copy.splice(randomIndex, 1);

    attitudes.push(element[0]);
  }

  attitudes = attitudes.slice(0, 10);

  attitudes[Math.floor(Math.random() * 10)] = "inquiring";
  return attitudes;
}

function getFewShotExamples(sentiment: string, attitudes: string[]) {
  // two objects in fewShotExamples: {statement: '', replies: [{attitude: '', reply: '', rating: '', explanation: ''}]}
  let fewShotExamples: any[] = [];

  let currExs = examples[sentiment as keyof typeof examples];

  [currExs["general"], currExs["work"]].forEach((exs, i) => {
    console.log(exs["statement"], i);
    let selectedExs = Object.fromEntries(
      Object.entries(exs).filter(
        ([key]) => attitudes.slice(i * 5, 5 * (i + 1)).indexOf(key) != -1
      )
    );
    fewShotExamples.push({ statement: exs["statement"], replies: selectedExs });
  });

  return fewShotExamples;
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

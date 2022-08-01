import examples, {
  attitudes as all_attitudes,
} from "../data/few-shot-examples";

export function selectAttitudes() {
  let all_attitudes_copy = all_attitudes.slice();
  let attitudes = [];

  while (all_attitudes_copy.length) {
    var randomIndex = Math.floor(Math.random() * all_attitudes_copy.length),
      element = all_attitudes_copy.splice(randomIndex, 1);

    attitudes.push(element[0]);
  }

  attitudes = attitudes.slice(0, 15);

  attitudes[Math.floor(Math.random() * 10)] = "inquiring";
  return attitudes;
}

export function getFewShotExamples(sentiment: string, attitudes: string[]) {
  // two objects in fewShotExamples: {statement: '', replies: [{attitude: '', reply: '', rating: '', explanation: ''}]}
  let fewShotExamples: any[] = [];

  let currExs = examples[sentiment as keyof typeof examples];
  console.log(sentiment + ":", currExs);

  [currExs["general"], currExs["work"]].forEach((exs, i) => {
    console.log(i, exs["statement"]);
    let selectedExs = Object.fromEntries(
      Object.entries(exs).filter(
        ([key]) => attitudes.slice(i * 5, 5 * (i + 1)).indexOf(key) != -1
      )
    );

    let replies = Object.keys(selectedExs).map((key) => ({
      ...(selectedExs[key] as Object),
      attitude: key,
    }));

    fewShotExamples.push({
      statement: exs["statement"],
      replies: replies,
      attitudes: attitudes.slice(i * 5, 5 * (i + 1)),
    });
  });

  return fewShotExamples;
}

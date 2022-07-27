import examples, {
  attitudes as all_attitudes,
} from "../data/few_shot_examples";

export default function formPrompt(
  statement: string,
  category: string,
  reply: string
) {
  // choose 10 attitudes randomly
  const attitudes = selectAttitudes(all_attitudes.slice());
  console.log(attitudes);

  // replace one of those 10 with "inquiring"

  // construct inital prompt with those attitudes

  let prompt = '"' + statement + '"\nYou reply, "' + reply + '"';

  console.log("### Prompt: " + prompt);

  console.log(category);

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

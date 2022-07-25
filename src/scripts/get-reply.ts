import general_statements from "../data/module_statements/general";
import work_statements from "../data/module_statements/work";
import Completion from "./Completion";

const module_statements = {
  general: general_statements,
  work: work_statements,
};

export default async function getReply(
  message: string,
  convoState: any,
  command: string
) {
  // response loading
  convoState.setValue((cs: any) => ({ ...cs, turn: command }));

  let replies = [
    {
      fromNoora: true,
      text: "Oops! Something went wrong.",
      statement: false,
    },
  ];

  if (command == "get-statement") {
    replies = [
      {
        fromNoora: true,
        text: await getStatement(convoState),
        statement: true,
      },
    ];
  } else if (command == "rate-reply") {
    convoState.setValue((cs: any) => ({
      ...cs,
      statement: null,
    }));
    let answers = await getRating(
      message,
      [...convoState.value.statement],
      convoState
    );

    replies = answers.map((a: any) => ({
      fromNoora: true,
      text: a,
      statement: false,
    }));
  }

  convoState.setValue((cs: any) => ({
    ...cs,
    turn: "user-answer",
  }));

  return replies;
}

async function getRating(message: string, statementObj: any, convoState: any) {
  let prompt = '"' + statementObj[1] + '"\nYou reply, "' + message + '"';
  let target = statementObj[2];
  console.log("### Prompt: " + prompt);

  // first get good/bad answer
  let { goodAnswer, replyCategory, explanation } = await Completion({
    model: convoState.value.model.name,
    prompt: prompt,
    temperature: convoState.value.model.temperature,
    max_tokens: 55,
    frequency_penalty: convoState.value.frequencyPenalty,
    presence_penalty: convoState.value.model.presencePenalty,
  }).then((output) => parseResponse(output));

  let answers = [];
  if (goodAnswer) {
    answers.push("Good answer!");
    answers.push(explanation);
  } else {
    answers.push("Not quite!");
    answers.push(explanation);
    answers.push("A better answer might've been: “" + target.trim() + "”");
  }

  // SET PROGRESS
  convoState.setValue((cs: any) => ({
    ...cs,
    progress: [
      ...cs.progress,
      {
        statement: statementObj[1],
        statementCategory: statementObj[0],
        reply: message,
        explanation: explanation,
        replyCategory: replyCategory,
        goodAnswer: goodAnswer,
      },
    ],
  }));

  return answers;
}

function parseResponse(output: any) {
  if (output.includes("END")) output = output.slice(0, output.indexOf("END"));
  console.log("### Output text: " + output);

  let goodAnswer = false;
  let explanation = "";
  // if (
  //   !(
  //     output.includes("This was a good answer.") ||
  //     output.includes("This was a bad answer.")
  //   )
  // ) {
  //   return { good_answer: null, explanation: null };
  // }
  let classification = "This was a good answer.";
  if (output.includes(classification)) {
    goodAnswer = true;
    explanation = output
      .slice(
        output.indexOf(classification) + classification.length,
        output.length
      )
      .trim();
  }
  classification = "This was a bad answer.";
  if (output.includes(classification)) {
    goodAnswer = false;
    explanation = output
      .slice(
        output.indexOf(classification) + classification.length,
        output.length
      )
      .trim();
  }

  let replyCategory = output.split(":")[0];
  replyCategory = replyCategory.split(" ").slice(0, 4).join(" "); // limits words in category

  return {
    goodAnswer: goodAnswer,
    replyCategory: replyCategory,
    explanation: explanation,
  };
}

export function getStatement(convoState: any) {
  // choose module
  const modules = convoState.value.modules.filter((m: any) => m.active);
  const module: string = getRandomItem(modules).title;
  console.log("Selected module: " + module);

  // choose statement
  let statement = getRandomItem(
    module_statements[module as keyof typeof module_statements]
  );
  convoState.setValue((cs: any) => ({
    ...cs,
    statement: statement,
  }));
  console.log("Selected statement: ");
  console.log(statement);

  return statement[1];
}

function timeout(ms: number) {
  // for testing purposes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomItem(items: any) {
  return items[Math.floor(Math.random() * items.length)];
}

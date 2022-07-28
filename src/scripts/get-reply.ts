import general_statements from "../data/module_statements/general";
import work_statements from "../data/module_statements/work";
import Completion from "./Completion";
import formPrompt from "./generate-evaluation-prompt";

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
  const prompt = formPrompt(statementObj[1], statementObj[0], message);
  // let target = statementObj[2];

  let output = "";
  let classification = "";
  let explanation = "";
  let goodAnswer = false;
  let numCalls = 0;
  let answers = [];

  try {
    // first get good/bad answer
    while (numCalls <= 2) {
      throw "Noora is not available right now.";
      let output = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
          model: convoState.value.model.name,
          prompt: prompt,
          temperature: 0,
          max_tokens: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          logprobs: 5,
        }),
      }).then((res) => res.json());

      numCalls++;

      output = output["text"];

      // let probsObj = output["logprobs"]["top_logprobs"][0];
      // let probs = softmax(Object.values(probsObj));
      // let goodProb = 0.0001
      // if (probsObj.indexOf(" Good") != -1)
      //   goodProb = probs[probsObj.indexOf(" Good")]
      // let badProb = 0.0001;
      // if (probsObj.indexOf(" Bad") != -1)
      //   badProb = probs[probsObj.indexOf(" Bad")];
      // console.log("Good: ", goodProb)
      // console.log("Bad: ", badProb);

      if (output.includes("Good")) {
        classification = "Good reply.";
        goodAnswer = true;
        break;
      } else if (output.includes("Bad")) {
        classification = "Bad reply.";
        goodAnswer = false;
        break;
      }

      console.log("Output: " + output);
      console.log("Regenerating rating...");
    }

    if (classification == "")
      throw `Could not generate classification for "${message}"!`;

    console.log("Classification: " + classification);

    output = await Completion({
      model: convoState.value.model.name,
      prompt: prompt + " " + classification,
      temperature: convoState.value.model.temperature,
      max_tokens: 40,
      frequency_penalty: convoState.value.frequencyPenalty,
      presence_penalty: convoState.value.model.presencePenalty,
    });

    explanation = output.split("\n")[0];
    console.log("Explanation: " + explanation);

    if (goodAnswer) {
      answers.push("Good reply!");
      answers.push(explanation);
    } else {
      answers.push("Not quite!");
      answers.push(explanation);
      // answers.push("A better answer might've been: “" + target.trim() + "”");
    }
  } catch (error) {
    console.error(error);
    explanation = "Noora is not available right now.";
    answers = [explanation];
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
        replyCategory: null,
        goodAnswer: goodAnswer,
      },
    ],
  }));

  return answers;
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

// function timeout(ms: number) {
//   // for testing purposes
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

function getRandomItem(items: any) {
  return items[Math.floor(Math.random() * items.length)];
}

function softmax(arr: any[]) {
  return arr.map(function (value: any, index: any) {
    return (
      Math.exp(value) /
      arr
        .map(function (y /*value*/) {
          return Math.exp(y);
        })
        .reduce(function (a, b) {
          return a + b;
        })
    );
  });
}

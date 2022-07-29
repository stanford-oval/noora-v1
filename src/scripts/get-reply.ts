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

  let classification = "";
  let explanation = "";
  let goodAnswer = false;
  let answers = [];
  let goodReplyConfidence = -1;

  try {
    // first get good/bad answer
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

    let probsObj = output["logprobs"]["top_logprobs"][0];

    let probs = softmax(Object.values(probsObj));
    let topTokens = Object.keys(probsObj);
    let goodProb = 0.000001;
    if (topTokens.indexOf(" Good") != -1)
      goodProb = probs[topTokens.indexOf(" Good")];
    let badProb = 0.000001;
    if (topTokens.indexOf(" Bad") != -1)
      badProb = probs[topTokens.indexOf(" Bad")];
    goodReplyConfidence = goodProb / (goodProb + badProb);

    if (goodReplyConfidence > convoState.value.model.goodReplyThreshold) {
      classification = "Good reply.";
      goodAnswer = true;
    } else {
      classification = "Bad reply.";
      goodAnswer = false;
    }

    console.log("Classification: " + classification);

    console.log(prompt + " " + classification);

    output = await Completion({
      model: convoState.value.model.name,
      prompt: prompt + " " + classification,
      temperature: convoState.value.model.temperature,
      max_tokens: 40,
      frequency_penalty: convoState.value.frequencyPenalty,
      presence_penalty: convoState.value.model.presencePenalty,
      stop: "\n",
    });

    explanation = output.trim();
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
    explanation = "Please enter a proper reply.";
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
        goodReplyConfidence: goodReplyConfidence,
        goodReplyThreshold: convoState.value.model.goodReplyThreshold,
      },
    ],
  }));

  return answers;
}

export function getStatement(convoState: any) {
  // choose module
  const modules = convoState.value.modules.filter((m: any) => m.active);
  const sentiments = convoState.value.sentiments.filter((s: any) => s.active);
  const module = getRandomItem(modules).title as keyof typeof module_statements;
  const sentiment = getRandomItem(sentiments)
    .title as keyof typeof module_statements[typeof module];

  // choose statement
  let statement = getRandomItem(module_statements[module][sentiment]);
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

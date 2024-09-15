import Completion from "../gpt-3/Completion";
import { v4 as uuidv4 } from "uuid";
import formPrompt from "../gpt-3/generate-evaluation-prompt";
import data from "../../data/statement_bank/data.json";
import JSConfetti from "js-confetti";
import { writeToFirestore } from "../../lib/firestoreUtils";

const problems = data.data;
const wrongReplies = [
  "Close!",
  "Almost!",
  "Almost there.",
  "Warm, but not quite there.",
];

function makeIndex(problems: any[]) {
  let counter = 0;
  return problems.map((p) => {
    return { idx: counter++, val: p };
  });
}

const pairedProblems = makeIndex(problems);

export default async function getReply(
  message: string,
  convoState: any,
  command: string
) {
  // response loading
  convoState.setValue((cs: any) => ({ ...cs, turn: command }));

  let replies = [
    {
      id: uuidv4(),
      fromNoora: true,
      text: "Oops! Something went wrong.",
      // sentiment: "neutral",
      statement: false,
    },
  ];

  if (command == "get-statement") {
    const statement = await getStatement(convoState);
    replies = [
      {
        id: uuidv4(),
        fromNoora: true,
        text: statement.text,
        // @ts-ignore
        sentiment: statement.sentiment,
        statement: true,
      },
    ];
    if (convoState.value.questionType == "old") {
      // @ts-ignore
      replies[0]["sentiment"] = statement.sentiment;
    }
  } else if (command == "rate-reply") {
    convoState.setValue((cs: any) => ({
      ...cs,
      statement: null,
    }));
    let answers = await getRating(
      message,
      convoState.value.statement.statementIdx,
      convoState.value.statement.statementObj,
      // [...convoState.value.statement.statementObj],
      convoState
    );

    replies = answers.map((a: any) => ({
      id: uuidv4(),
      fromNoora: true,
      text: a.text,
      suggestion: a.suggestion,
      sentiment: a.sentiment ? a.sentiment : "neutral",
      statement: false,
    }));
  }

  convoState.setValue((cs: any) => ({
    ...cs,
    turn:
      command == (convoState.value.questionType == "old" && "get-statement")
        ? "user-select"
        : "user-answer",
  }));

  return replies;
}

async function getRating(
  message: string,
  statementIdx: number,
  statementObj: any,
  convoState: any
) {
  const prompt = formPrompt(statementObj, message);
  let target = statementObj.val.response;

  let classification = "";
  let explanation = "";
  let goodAnswer = false;
  let answers = [];

  try {
    // first get good/bad answer
    let output = await Completion({
      model: convoState.value.model.name,
      prompt: prompt,
      temperature: 0,
      max_tokens: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (output.split(" ")[0] === "Good") {
      classification = "Good reply.";
      goodAnswer = true;
    } else {
      classification = "Bad reply.";
      goodAnswer = false;
    }

    console.log("Classification: " + classification);

    output = await Completion({
      model: convoState.value.model.name,
      prompt: prompt + " " + classification,
      temperature: convoState.value.model.temperature,
      max_tokens: 128,
      frequency_penalty: convoState.value.model.frequencyPenalty,
      presence_penalty: convoState.value.model.presencePenalty,
      stop: "\n",
    });

    console.log(`model: ${convoState.value.model.name}`);
    console.log(`prompt: ${prompt} ${classification}`);
    console.log(`temperature: ${convoState.value.model.temperature}`);
    console.log(`max_tokens: 128`);
    console.log(
      `frequency_penalty: ${convoState.value.model.frequencyPenalty}`
    );
    console.log(`presence_penalty: ${convoState.value.model.presencePenalty}`);
    console.log(`stop: "\\n"`);

    explanation = output.trim();
    console.log("explanation:");
    console.log(output);

    if (goodAnswer) {
      answers.push({ text: "Good reply!", sentiment: "positive" });
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiColors: [
          "#EE3E19",
          "#EE9F19",
          "#EEC819",
          "#83CC19",
          "#19CC9B",
          "#19A6CC",
          "#1945CC",
          "#5919CC",
          "#B519CC",
          "#CC1968",
        ],
        emojiSize: 200,
        confettiNumber: 30,
      });
      answers.push({ text: explanation, sentiment: "positive" });
    } else {
      answers.push({
        text: wrongReplies[Math.floor(Math.random() * wrongReplies.length)],
      });
      answers.push({ text: explanation });
      answers.push({ text: target.trim(), suggestion: true });
    }
  } catch (error) {
    console.error(error);
    explanation = "Please enter a proper reply.";
    answers = [explanation];
  }

  console.log(statementObj);

  const newProgressItem = {
    idx: statementIdx,
    statement: statementObj.val.text,
    statementCategory: statementObj.val.task_name,
    // @ts-ignore
    sentimentGiven: statementObj.val.sentiment,
    // added these two to track guess + correct boolean
    sentimentCorrectlyIdentified:
      convoState.value.currProblemSentimentInfo.sentimentCorrectlyIdentified,
    sentimentGuessedByUser:
      convoState.value.currProblemSentimentInfo.sentimentGuessedByUser,
    reply: message,
    explanation: explanation,
    goodAnswer: goodAnswer,
    currentProblemNumber: convoState.value.progress.length + 1,
  };

  // SET PROGRESS
  convoState.setValue((cs: any) => ({
    ...cs,
    progress: [...cs.progress, newProgressItem],
  }));

  writeToFirestore(convoState, newProgressItem);

  return answers;
}

export async function getStatement(convoState: any) {
  // choose module
  const modules = convoState.value.modules.filter((m: any) => m.active);
  const category = getRandomItem(modules).title;
  let filtered_problems = pairedProblems.filter(
    (c: any) => c.val.task_name == category
  );
  if (convoState.value.questionType == "old") {
    const sentiments = convoState.value.sentiments.filter((s: any) => s.active);
    const sentiment = getRandomItem(sentiments).title;
    filtered_problems = filtered_problems.filter((c: any) =>
      c.val.sentiment.includes(sentiment)
    );
  }
  // await timeout(700);
  // choose statement
  const statementIdx = getStatementIdx(category, filtered_problems, convoState);

  const statement = pairedProblems[statementIdx];
  convoState.setValue((cs: any) => ({
    ...cs,
    statement: { statementIdx: statementIdx, statementObj: statement },
  }));

  if (convoState.value.questionType == "old") {
    return { sentiment: statement.val.sentiment, text: statement.val.text };
  }
  return { text: statement.val.text };
}

function getStatementIdx(
  category: string,
  statementsList: any[],
  convoState: any
) {
  let seenIdxs = convoState.value.progress
    .map((p: any) => {
      if (p.statementCategory == category && p.goodAnswer)
        return p.idx; // same category seen, but can repeat ones where user got it wrong
      else {
        return -1;
      }
    })
    .filter((i: number) => i >= 0);
  if (convoState.value.statement)
    seenIdxs.push(convoState.value.statement.statementIdx);
  // console.log("Seen statement indexes:", seenIdxs);

  if (seenIdxs.length >= statementsList.length) {
    console.log("Exhausted all statements. Resetting.");
    seenIdxs = seenIdxs.slice(
      statementsList.length *
        Math.floor(seenIdxs.length / statementsList.length),
      seenIdxs.length
    );
  }

  let newRandomIdx = 0;
  while (true) {
    let possibleIdxs = statementsList.map((c) => c.idx);
    console.log(possibleIdxs);
    const randomElement =
      statementsList[Math.floor(Math.random() * possibleIdxs.length)];
    newRandomIdx = randomElement.idx;
    if (seenIdxs.indexOf(newRandomIdx) == -1) break;
  }

  return newRandomIdx;
}

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

import { v4 as uuidv4 } from "uuid";
import general_statements from "../data/module_statements/general";
import work_statements from "../data/module_statements/work";

const module_statements = {
  general: general_statements,
  work: work_statements,
};

export default async function getReply(
  message: string,
  historyQueue: any,
  convoState: any,
  command: string,
  delay = 1000
) {
  const id = uuidv4();
  // response loading
  convoState.setValue({ ...convoState.value, turn: command });
  historyQueue.setValue([
    ...historyQueue.value,
    { id: id, fromNoora: true, typing: true },
  ]);

  let reply = "Oops! Something went wrong.";
  if (command == "get-statement") reply = await getStatement(convoState, delay);
  else if (command == "rate-reply") {
    convoState.setValue({ ...convoState.value, statement: null });
    reply = await getRating(message, [...convoState.value.statement]);
  }

  let replyObj = {
    id: id,
    fromNoora: true,
    text: reply,
  };

  historyQueue.setValue([...historyQueue.value, replyObj]);
}

async function getRating(message: string, convoState: any) {
  await timeout(1000);
  return "Here is the rating";
}

async function getStatement(convoState: any, delay: number) {
  await timeout(delay);

  // choose module
  const modules = convoState.value.modules.filter((m: any) => m.active);
  const module: string = getRandomItem(modules).title;
  console.log("Selected module: " + module);

  // choose statement
  let statement = getRandomItem(
    module_statements[module as keyof typeof module_statements]
  );
  convoState.setValue({ ...convoState.value, statement: statement, turn: "user-answer"  });
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

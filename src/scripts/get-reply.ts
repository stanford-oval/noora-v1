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
  convoState.setValue({ ...convoState.value, turn: "noora-reply" });
  historyQueue.setValue([
    ...historyQueue.value,
    { id: id, fromNoora: true, typing: true },
  ]);

  let reply = "Oops! Something went wrong.";
  console.log(command);
  if (command == "get-statement") reply = await getStatement(convoState, delay);

  let replyObj = {
    id: id,
    fromNoora: true,
    text: reply,
  };

  // finish + push
  convoState.setValue({ ...convoState.value, turn: "user-answer" });
  historyQueue.setValue([...historyQueue.value, replyObj]);
}

async function getStatement(convoState: any, delay: number) {
  // choose module
  const modules = convoState.value.modules.filter((m: any) => m.active);
  const module: string = getRandomItem(modules).title;
  console.log("Selected module: " + module);

  // choose statement
  let statement = getRandomItem(
    module_statements[module as keyof typeof module_statements]
  );
  convoState.setValue({ ...convoState.value, statement: statement });
  console.log("Selected statement: ");
  console.log(statement);

  // await timeout(delay);
  return statement[1];
}

function timeout(ms: number) {
  // for testing purposes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomItem(items: any) {
  return items[Math.floor(Math.random() * items.length)];
}

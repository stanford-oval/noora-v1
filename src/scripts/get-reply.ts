import { v4 as uuidv4 } from "uuid";

export default async function getReply(
  message: string,
  historyQueue: any,
  convoState: any,
  turn: string,
  delay = 1000
) {
  const id = uuidv4();
  console.log(turn);
  // response loading
  convoState.setValue({ ...convoState.value, turn: "noora-reply" });
  historyQueue.setValue([
    ...historyQueue.value,
    { id: id, fromNoora: true, typing: true },
  ]);

  let reply = "Oops! Something went wrong.";
  console.log(turn);
  if (turn == "get-statement") reply = await getStatement(delay);

  let replyObj = {
    id: id,
    fromNoora: true,
    text: reply,
  };

  // finish + push
  convoState.setValue({ ...convoState.value, turn: "user-answer" });
  historyQueue.setValue([...historyQueue.value, replyObj]);
}

async function getStatement(delay: number) {
  await timeout(delay);
  return "I read a really good book!";
}

function timeout(ms: number) {
  // for testing purposes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

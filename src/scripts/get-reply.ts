import { v4 as uuidv4 } from "uuid";

export default async function getReply(
  message: string,
  historyQueue: any,
  convoState: any
) {
  const id = uuidv4();
  const turn = convoState.turn;
  convoState.setValue({ ...convoState.value, turn: "noora-reply" });
  historyQueue.setValue([
    ...historyQueue.value,
    { id: id, fromNoora: true, typing: true },
  ]);

  await timeout(1000);
  let reply = {
    id: id,
    fromNoora: true,
    text: `message: ${message}; modules: [${convoState.value.modules
      .map((m: any) => {
        if (m.active) return m.title;
        else return false;
      })
      .join(", ")}]`,
  };

  convoState.setValue({ ...convoState.value, turn: "user-answer" });
  historyQueue.setValue([...historyQueue.value, reply]);
}

function timeout(ms: number) {
  // for testing purposes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

import { v4 as uuidv4 } from "uuid";

export default async function getReply(
  message: string,
  historyQueue: any,
  setHistoryQueue: any,
  convoState: any,
  setConvoState: any
) {
  const id = uuidv4();
  const turn = convoState.turn;
  setConvoState({ ...convoState, turn: "noora-reply" });
  setHistoryQueue([...historyQueue, { id: id, fromNoora: true, typing: true }]);

  let reply = message;
  await timeout(1000);
  return {
    id: id,
    fromNoora: true,
    text: `message: ${reply}; modules: [${convoState.modules
      .map((m: any) => {
        if (m.active) return m.title;
        else return false;
      })
      .join(", ")}]`,
  };
}

function timeout(ms: number) {
  // for testing purposes
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getReply(
  message: string,
  id: string,
  convoState: any,
  setConvoState: any
) {
  const turn = convoState.turn;
  setConvoState({ ...convoState, turn: "noora-reply" });
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

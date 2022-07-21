import React from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function NooraChat({ convoState, history, draft }: any) {
  return (
    <div>
      <Header convoState={convoState} />
      <Messages history={history} convoState={convoState} />
      <MessageBox draft={draft} history={history} convoState={convoState} />
    </div>
  );
}

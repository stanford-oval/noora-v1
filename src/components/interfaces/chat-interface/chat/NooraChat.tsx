import React from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function NooraChat({
  convoState,
  history,
}: any) {
  return (
    <div>
      <Header />
      <Messages history={history} convoState={convoState} />
      <MessageBox
        history={history}
        convoState={convoState}
      />
    </div>
  );
}

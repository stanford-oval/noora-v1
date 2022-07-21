import React from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function NooraChat({ convoState, history, draft }: any) {
  return (
    <div className="basis-auto md:basis-3/4 lg:basis-7/12 w-full mx-auto py-4">
      <Header convoState={convoState} />
      <Messages history={history} convoState={convoState} />
      <MessageBox draft={draft} history={history} convoState={convoState} />
    </div>
  );
}

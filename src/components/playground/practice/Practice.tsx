import React, { useContext, useEffect } from "react";
import { PlaygroundContext } from "../Playground";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function Practice() {
  const { practice } = useContext(PlaygroundContext);
  const { draft, history, convoState } = practice;

  return (
    <div className="bg-gray-100">
      <div className="pt-16 container flex items-center flex-row justify-center">
        <div className="basis-auto md:basis-3/4 lg:basis-7/12 w-full mx-auto py-4">
          <Header convoState={convoState} />
          <Messages
            history={history}
            convoState={convoState}
          />
          <MessageBox
            draft={draft}
            history={history}
            convoState={convoState}
          />
        </div>
      </div>
    </div>
  );
}

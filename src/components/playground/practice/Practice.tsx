import React, { useContext, useEffect } from "react";
import { PlaygroundContext } from "../Playground";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function Practice() {
  const { practice } = useContext(PlaygroundContext);
  const { draft, history, historyQueue, convoState } = practice;

  useEffect(() => {
    // on queue change, update the right element
    historyQueue.value.forEach((reply: any) => {
      let inHistory = false;
      const newHistory: any[] = history.value.map((r: any) => {
        if (r.id == reply.id) {
          inHistory = true;
          return reply; // replace the object
        } else return r;
      });

      if (inHistory) history.setValue(newHistory);
      else history.setValue([...history.value, reply]);
      historyQueue.setValue([]);
    });
  }, [historyQueue.value]);

  return (
    <div className="bg-gray-100">
      <div className="pt-16 container flex items-center flex-row justify-center">
        <div className="basis-auto md:basis-3/4 lg:basis-7/12 w-full mx-auto py-4">
          <Header convoState={convoState} />
          <Messages
            history={history}
            historyQueue={historyQueue}
            convoState={convoState}
          />
          <MessageBox
            draft={draft}
            history={history}
            historyQueue={historyQueue}
            convoState={convoState}
          />
        </div>
      </div>
    </div>
  );
}

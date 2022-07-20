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
      const newHistory: any[] = history.value.map((r: any) => {
        if (r.id == reply.id) return reply;
        else return r;
      });

      history.setValue(newHistory);

      historyQueue.setValue([]); // empty queue
    });
  }, [historyQueue.value]);

  return (
    <div className="bg-gray-100">
      <div className="pt-16 container">
        <div className="max-w-2xl mx-auto py-4">
          <Header />
          <Messages history={history} />
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

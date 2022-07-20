import React, { useContext, useEffect, useRef } from "react";
import { PlaygroundContext } from "../Playground";
import MessageBox from "./MessageBox";
import { clsx } from "clsx";

export default function Practice() {
  const { practice } = useContext(PlaygroundContext);
  const { history, historyQueue, inputBoxRef } = practice;
  const messagesBottom = useRef<HTMLDivElement>(null);

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

  // scrolling
  useEffect(() => {
    if (messagesBottom.current)
      messagesBottom.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [history.value]);

  return (
    <div className="bg-gray-100">
      <div className="pt-16 container">
        <div className="max-w-2xl mx-auto py-4">
          <div className="w-full bg-white p-2 pt-3 border-2 border-gray-400 rounded-t-md">
            <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-noora-primary-light via-noora-primary-dark to-noora-primary-dark2"></div>
            <div className="text-2xl text-center font-bold text-noora-primary-dark2">
              Noora
            </div>
          </div>
          <div className="bg-white border-x-2 border-gray-400 p-2" id="chat">
            <ul>
              {history.value.map((message: any, i: number) => (
                <li key={i}>
                  {message && (
                    <div
                      className={clsx(
                        "rounded-xl w-fit px-4 py-3 mt-1.5 max-w-xs break-words",
                        message.fromNoora
                          ? "bg-gray-200 mr-auto"
                          : "bg-noora-primary-main text-white ml-auto"
                      )}
                    >
                      {message.typing ? (
                        <div className="px-3 py-1">
                          <div className="snippet" data-title=".dot-flashing">
                            <div className="stage">
                              <div className="dot-flashing" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        message.text
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="-mb-20 invisible text-xs" ref={messagesBottom}>.</div>
          </div>
          <MessageBox />
        </div>
      </div>
    </div>
  );
}

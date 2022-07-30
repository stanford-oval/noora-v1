import React, { useRef, useEffect } from "react";
import { clsx } from "clsx";
import { getStatement } from "../../../scripts/get-reply";

export default function Messages({ history, convoState }: any) {
  const messagesBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.value.length > 0) return; // only run this on first render
    let activeModules = convoState.value.modules.filter((m: any) => m.active);

    history.setValue((h: any) => [
      ...h,
      ...[
        "Hi! I am Noora.",
        `Imagine that I am your ${
          activeModules.length == 1 && activeModules[0].title == "work"
            ? "co-worker"
            : "friend"
        }. Let's start chatting.`,
        getStatement(convoState),
      ].map((m, i) => ({
        id: -1 - i,
        fromNoora: true,
        text: m,
        statement: i == 2,
      })),
    ]);
  }, []);

  // scrolling
  useEffect(() => {
    setTimeout(() => {
      if (messagesBottom.current)
        if (
          history.value
            .slice(0, Math.min(history.value.length, 5))
            .filter((h: any) => !h.fromNoora).length > 0
        )
          messagesBottom.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
    }, 5);
  }, [history.value, convoState.value.turn]);

  return (
    <div
      className="bg-white border-x-2 border-gray-400 p-2 overflow-y-auto pretty-scroll"
      id="chat-window"
    >
      <ul>
        {history.value.map((message: any, i: number) => (
          <li key={i}>
            {message && message.text && (
              <div
                className={clsx(
                  "rounded-xl w-fit px-4 py-3 mt-1.5 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl break-words",
                  message.fromNoora
                    ? "bg-gray-200 mr-auto"
                    : "bg-noora-primary text-white ml-auto"
                )}
              >
                {message.statement ? (
                  <span>
                    <span className="font-bold text-noora-primary-dark">
                      &ldquo;{message.text}&rdquo;
                    </span>{" "}
                    What would you say?
                  </span>
                ) : (
                  message.text
                )}
              </div>
            )}
          </li>
        ))}
        {!convoState.value.turn.startsWith("user-answer") && (
          <div
            className={
              "rounded-xl w-fit px-4 py-3 mt-1.5 max-w-xs break-words bg-gray-200 mr-auto"
            }
          >
            <div className="px-3 py-1">
              <div className="snippet" data-title=".dot-flashing">
                <div className="stage">
                  <div className="dot-flashing" />
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>
      <div className="-mb-20 invisible text-xs" ref={messagesBottom}>
        .
      </div>
    </div>
  );
}

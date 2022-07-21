import React, { useRef, useEffect } from "react";
import { clsx } from "clsx";
import { getStatement } from "../../../scripts/get-reply";

export default function Messages({ history, convoState }: any) {
  const messagesBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.value.length > 0) return; // only run this on first render
    history.setValue((h: any) => [
      ...h,
      ...[
        "Hi! I am Noora.",
        "Imagine that I am your friend. Let's start chatting.",
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
    if (messagesBottom.current)
      messagesBottom.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [history.value]);

  return (
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
        {convoState.value.turn != "user-answer" && (
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

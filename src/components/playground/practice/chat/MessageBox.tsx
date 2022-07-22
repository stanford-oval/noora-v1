import { faMicrophone, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import getReply from "../../../../scripts/get-reply";
import { v4 as uuidv4 } from "uuid";

export default function MessageBox({ history, convoState }: any) {
  const inputBoxRef = useRef<HTMLInputElement>(null);

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = convoState.value.draft.slice();
    let userMsgId = uuidv4();

    history.setValue((h: any) => [
      ...h,
      { id: userMsgId, fromNoora: false, text: message },
    ]);
    convoState.setValue((cs: any) => ({ ...cs, draft: "" }));

    if (convoState.value.progress.length < convoState.value.numProblems) {
      if (convoState.value.statement) {
        // rate reply if statement was given
        const replies = await getReply(message, convoState, "rate-reply");
        history.setValue((h: any) => [...h, ...replies]);
      }

      // get statement if still need to practice
      // note that progress state has not updated yet, so we use (length + 1)
      if (convoState.value.progress.length + 1 < convoState.value.numProblems) {
        const replies = await getReply(message, convoState, "get-statement");
        history.setValue((h: any) => [
          ...h,
          { fromNoora: true, text: "Let's try another one." },
          ...replies,
        ]);
      } else {
        history.setValue((h: any) => [
          ...h,
          {
            fromNoora: true,
            text: `Good job! You practiced ${convoState.value.numProblems} scenarios. Say anything to see your results summary.`,
          },
        ]);
        convoState.setValue((cs: any) => ({ ...cs, turn: "user-answer-end" }));
      }
    } else {
      convoState.setValue((cs: any) => ({ ...cs, turn: "summary" }));
    }
  };

  useEffect(() => {
    if (
      convoState.value.turn.startsWith("user-answer") &&
      history.value.length > 3
    ) {
      if (inputBoxRef.current) inputBoxRef.current.focus();
    }
  }, [convoState.value]);

  return (
    <form
      className="px-2 bg-white rounded-b-md py-2 border-gray-400 border-2"
      id="messageBox"
    >
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none text-slate-400 z-10">
          <FontAwesomeIcon icon={faPen} className="w-4 h-4" />
        </div>

        <input
          ref={inputBoxRef}
          type="text"
          onChange={(e) => {
            convoState.setValue((cs: any) => ({
              ...cs,
              draft: e.target.value,
            }));
          }}
          value={convoState.value.draft}
          placeholder={
            convoState.value.turn == "user-answer"
              ? "Send message..."
              : "Please wait for Noora..."
          }
          disabled={convoState.value.turn != "user-answer"}
          className="block focus:border-gray-400 focus:ring-0 p-4 pl-12 w-full border-2 focus:outline-none border-gray-400 shadow-sm sm:text-sm rounded-full text-slate-800 disabled:bg-gray-100"
        />
        <div className="flex absolute right-20 bottom-3 md:bottom-2.5 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("In Microphone handler");
            }}
            className="bg-noora-primary-main hover:bg-noora-primary-dark focus:outline-none font-medium rounded-full text-sm px-2.5 py-2.5"
          >
            <FontAwesomeIcon
              icon={faMicrophone}
              className="w-4 h-4 text-white"
            />
          </button>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={convoState.value.draft.length == 0}
          className="text-white absolute right-2.5 bottom-3 md:bottom-2.5 bg-noora-primary-main hover:bg-noora-primary-dark focus:outline-none font-medium rounded-full text-sm px-4 py-2"
        >
          Send
        </button>
      </div>
    </form>
  );
}

import { faMicrophone, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import getReply from "../../../scripts/get-reply";
import { v4 as uuidv4 } from "uuid";
import Microphone from "../../global/utility/Microphone";
import { clsx } from "clsx";

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
      await noorasTurn(message, convoState, history);
    } else {
      let m = message.trim().toLowerCase();
      if (m.includes("ye") || m.includes("i want to")) {
        convoState.setValue((cs: any) => ({
          ...cs,
          numProblems: cs.numProblems + 3,
        }));
        await noorasTurn(message, convoState, history, true);
      } else {
        convoState.setValue((cs: any) => ({ ...cs, turn: "summary" }));
      }
    }
  };

  useEffect(() => {
    if (
      (convoState.value.turn.startsWith("user-answer") &&
        history.value.length > 3) ||
      convoState.value.turn == "user-answer-edit"
    ) {
      // don't autofocus on page load (especially for mobile)
      // hence the history check, but we want to autofocus if microphone used
      if (inputBoxRef.current) inputBoxRef.current.focus();
    }
  }, [convoState.value]);

  return (
    <form
      className="px-2 bg-white rounded-b-md py-2 border-gray-400 border-2"
      id="messageBox"
    >
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none  z-10">
          {convoState.value.turn.includes("microphone") ? (
            <FontAwesomeIcon
              icon={faMicrophone}
              className="w-4 h-4 text-noora-primary"
            />
          ) : (
            <FontAwesomeIcon icon={faPen} className="w-4 h-4 text-slate-400" />
          )}
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
            convoState.value.turn.startsWith("user-answer")
              ? convoState.value.turn.includes("microphone")
                ? "Speak into your microphone..."
                : "Send message..."
              : "Please wait for Noora..."
          }
          disabled={
            !convoState.value.turn.startsWith("user-answer") ||
            convoState.value.turn.includes("microphone")
          }
          className={clsx(
            "block focus:border-gray-400 focus:ring-0 p-4 pl-12 pr-32 w-full border-2 focus:outline-none shadow-sm sm:text-sm rounded-full text-slate-800 disabled:bg-gray-100",
            convoState.value.turn.includes("microphone")
              ? "border-noora-primary"
              : "border-gray-400"
          )}
        />
        <div className="flex absolute right-20 bottom-3 md:bottom-2.5 z-10">
          <Microphone
            className="bg-noora-primary hover:bg-noora-primary-dark focus:outline-none font-medium rounded-full text-sm px-2.5 py-2.5"
            turn={convoState.value.turn}
            setTurn={(str: string) =>
              convoState.setValue((cs: any) => ({
                ...cs,
                turn: str,
              }))
            }
            setText={(str: string) =>
              convoState.setValue((cs: any) => ({
                ...cs,
                draft: str,
              }))
            }
            currText={convoState.value.draft}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={
            convoState.value.draft.length == 0 ||
            convoState.value.turn.includes("microphone")
          }
          className="text-white absolute right-2.5 bottom-3 md:bottom-2.5 bg-noora-primary hover:bg-noora-primary-dark focus:outline-none font-medium rounded-full text-sm px-4 py-2"
        >
          Send
        </button>
      </div>
    </form>
  );
}

async function noorasTurn(
  message: string,
  convoState: any,
  history: any,
  noorasTurn = false
) {
  if (convoState.value.statement) {
    // rate reply if statement was given
    const replies = await getReply(message, convoState, "rate-reply");
    history.setValue((h: any) => [...h, ...replies]);
  }

  // get statement if still need to practice
  // note that progress state has not updated yet, so we use (length + 1)
  if (
    convoState.value.progress.length + 1 < convoState.value.numProblems ||
    noorasTurn
  ) {
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
        text: `Good job! You practiced ${convoState.value.numProblems} scenarios. Do you want to continue practicing?`,
      },
    ]);
    convoState.setValue((cs: any) => ({ ...cs, turn: "user-answer-end" }));
  }
}

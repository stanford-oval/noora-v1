import { faMicrophone, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import getReply from "../../../scripts/get-reply";
import { v4 as uuidv4 } from "uuid";
import Microphone from "../../global/utility/Microphone";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
const JoyRideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });

export default function MessageBox({ history, convoState }: any) {
  const [steps, setSteps] = useState([
    {
      target: ".joyride-step-1",
      content: "You can tap on this button to speak!",
    },
  ]);
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

    let m = message.trim().toLowerCase();

    if (convoState.value.turn == "user-answer-start") {
      if (m.includes("no") || m.includes("don") || m.includes("na")) {
        history.setValue((h: any) => [
          ...h,
          { id: uuidv4(), fromNoora: true, text: "Are you ready to begin?" },
        ]);
      } else {
        await noorasTurn(message, convoState, history, true);
      }
    } else if (
      convoState.value.progress.length < convoState.value.numProblems
    ) {
      await noorasTurn(message, convoState, history);
    } else {
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
        history.value
          .slice(0, Math.min(history.value.length, 5))
          .filter((h: any) => !h.fromNoora).length > 0) ||
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
      {/* <JoyRideNoSSR
        steps={steps}
        floaterProps={{ placement: "left" }}
        styles={{
          options: {
            // overlayColor: "rgba(79, 26, 0, 0.4)",
            primaryColor: "#6940b6",
            zIndex: 1000,
          },
        }}
        locale={{
          close: "Got it!",
        }}
      /> */}
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
        <div className="flex absolute right-20 bottom-3 md:bottom-2.5 z-10 joyride-step-1">
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
      {
        fromNoora: true,
        id: uuidv4(),
        text:
          convoState.value.turn == "user-answer-start"
            ? "Let's get started."
            : "Let's try another one.",
      },
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

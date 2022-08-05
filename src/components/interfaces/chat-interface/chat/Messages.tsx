import React, { useRef, useState, useEffect } from "react";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { InformationCircleIcon } from "@heroicons/react/outline";

import dynamic from "next/dynamic";
import { ACTIONS, EVENTS, STATUS } from "react-joyride";
import SpeechSynthesizer from "../../../global/utility/SpeechSynthesizer";
const JoyRideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });

export default function Messages({ history, convoState }: any) {
  const messagesBottom = useRef<HTMLDivElement>(null);

  let currentAudioRef = useRef()

  currentAudioRef.current = convoState.value.currentAudio


  useEffect(() => {
    if (history.value.length > 0) return; // only run this on first render
    let activeModules = convoState.value.modules.filter((m: any) => m.active);

    history.setValue((h: any) => [
      ...h,
      {
        id: -1,
        fromNoora: true,
        text: "Hi! I am Noora.",
        style: "cheerful"
      },
      {
        id: -2,
        fromNoora: true,
        text: `Imagine that I am your ${activeModules.length == 1 && activeModules[0].title == "work"
          ? "co-worker"
          : "friend"
          }.`,
      },
      {
        id: -3,
        fromNoora: true,
        component: <MicrophoneInfoElement />,
        read: "You can tap on the microphone button to speak. Click on the audio button to hear Noora's replies"
      },
      {
        id: -4,
        fromNoora: true,
        text: "Are you ready to begin?",
      },
    ]);
    convoState.setValue((cs: any) => ({ ...cs, turn: "user-answer-start" }));
    // convoState.setValue((cs: any) => ({ ...cs, turn: "user-select-start" }));
  }, []);

  // scrolling
  useEffect(() => {
    setTimeout(() => {
      if (messagesBottom.current)
        if (
          history.value
            .slice(0, Math.min(history.value.length, 6))
            .filter((h: any) => !h.fromNoora).length > 0
        )
          messagesBottom.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
    }, 5);
  }, [history.value]);

  return (
    <div
      className="bg-white border-x-2 border-gray-400 p-2 overflow-y-auto pretty-scroll"
      id="chat-window"
    >
      <ul>
        {history.value.map((message: any, i: number) => (
          <li key={i}>
            {message && (
              <div
                className={clsx(
                  "rounded-xl w-fit px-4 py-3 mt-1.5 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl break-words",
                  message.fromNoora
                    ? "bg-gray-200 mr-auto"
                    : "bg-noora-primary text-white ml-auto"
                )}
              >
                <div className="flex flex-row items-center gap-x-2">
                  {message.text ? <Message message={message} /> : message.component}
                  {message.fromNoora && <SpeechButton currentAudioRef={currentAudioRef} convoState={convoState} message={message} />}
                </div>
              </div>
            )}
          </li>
        ))}
        {(!convoState.value.turn.startsWith("user") && !convoState.value.turn.includes("read")) && (
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

function Message({ message }: any) {
  if (message.statement)
    return (
      <div>
        <span>
          <span className="font-bold text-noora-primary-dark">
            &ldquo;{message.text}&rdquo;
          </span>{" "}
          Is this a positive, neutral, or negative statement?
        </span>
      </div>
    );
  else if (message.suggestion)
    return (
      <div>
        <span>
          A better reply might&apos;ve been:{" "}
          <span className="font-bold text-noora-secondary-light">
            &ldquo;{message.text}&rdquo;
          </span>
        </span>
      </div>
    );
  else if (message.correction)
    return (
      <div>
        <span>
          Actually, this is a{" "}
          <span className="font-bold text-noora-secondary-light">
            {message.text}
          </span> statement.
        </span>
      </div>
    );
  return <div>{message.text}</div>;
}

function MicrophoneInfoElement() {
  const [joyrideState, setJoyrideState] = useState({
    run: false,
    steps: [
      {
        target: ".joyride-step-1",
        content:
          "Tap this button, then speak!\n Noora will turn what you say into text.",
        disableBeacon: true,
      },
      {
        target: ".demo-audio",
        content:
          "Tap this button to hear Noora speak! Noora can speak in sad and happy tones.",
        disableBeacon: true,
      },
    ],
    stepIndex: 0,
  });

  const handleJoyrideCallback = (data: any) => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      setJoyrideState((js: any) => ({
        ...js,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      }));
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setJoyrideState((js: any) => ({ ...js, stepIndex: 0, run: false }));
    }
  };

  return (
    <div>
      <JoyRideNoSSR
        steps={joyrideState.steps}
        run={joyrideState.run}
        callback={handleJoyrideCallback}
        stepIndex={joyrideState.stepIndex}
        floaterProps={{ placement: "top" }}
        styles={{
          options: {
            // overlayColor: "rgba(79, 26, 0, 0.4)",
            primaryColor: "#6940b6",
            zIndex: 1000,
          },
        }}
        locale={{
          next: "Next",
          close: "Got it!",
        }}
      />
      You can tap on the{" "}
      <FontAwesomeIcon
        icon={faMicrophone}
        onClick={() => {
          setJoyrideState((js: any) => ({ ...js, run: true }));
        }}
        className="w-4 h-4 text-noora-primary inline-block mb-1 px-0.5 cursor-pointer"
      />{" "}
      button to speak. Click the <FontAwesomeIcon
        icon={faVolumeUp}
        onClick={() => {
          setJoyrideState((js: any) => ({ ...js, run: true, stepIndex: 1 }));
        }}
        className="w-5 h-5 text-noora-primary inline-block mb-1 px-0.5 cursor-pointer"
      /> button to hear Noora&lsquo;s replies.
      <button
        onClick={() => {
          setJoyrideState((js: any) => ({ ...js, run: true }));
        }}
        className="button text-xs bg-noora-secondary-bright hover:bg-noora-secondary-light text-white block mt-3"
      >
        <span>Show me where</span>
        <InformationCircleIcon className="w-4 h-4 inline-block ml-1 -mt-0.5" />
      </button>
    </div>
  );
}

function SpeechButton({ convoState, message, currentAudioRef }: any) {
  const preText = message.suggestion ? "A better answer might've been: " : ""
  const text = message.read ? message.read : message.text
  const postText = message.statement ? " Is this a positive, neutral, or negative statement?" : ""
  let style = "neutral"
  if (message.style)
    style = message.style
  else if (message.sentiment == "positive")
    style = "cheerful"
  else if (message.sentiment == "negative")
    style = "sad"

  return (<SpeechSynthesizer
    convoState={convoState} currentAudioRef={currentAudioRef} preText={preText} text={text} postText={postText} style={style} styleDegree={1.3}
    className={clsx("-mt-0.5 h-4 w-4 inline-block ", message.id == -3 ? "demo-audio" : "")} id={message.id} />
  )
}
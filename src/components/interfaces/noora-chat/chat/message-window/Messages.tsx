import React, { useRef, useEffect } from "react";
import Message from "./Message";
import MicrophoneInfo from "./MicrophoneInfo";

export default function Messages({ history, convoState }: any) {
  const messagesBottom = useRef<HTMLDivElement>(null);

  let audioRef = useRef()

  audioRef.current = convoState.value.audio

  useEffect(() => {
    if (history.value.length > 0) return; // only run this on first render
    let activeModules = convoState.value.modules.filter((m: any) => m.active);

    history.setValue((h: any) => [
      ...h,
      {
        id: -1,
        show: true,
        fromNoora: true,
        text: "Hi! I am Noora.",
        read: "Hi. I am Nora.",
        style: "cheerful"
      },
      {
        id: -2,
        show: true,
        fromNoora: true,
        text: `Imagine that I am your ${activeModules.length == 1 && activeModules[0].title == "work"
          ? "co-worker"
          : "friend"
          }.`,
      },
      {
        id: -3,
        fromNoora: true,
        show: true,
        component: <MicrophoneInfo />,
        read: "You can tap on the microphone button to speak. Click the audio button to hear my replies"
      },
      // {
      //   id: -4,
      //   show: true,
      //   fromNoora: true,
      //   text: "When I say something"
      // },
      // {
      //   id: -4,
      //   show: true,
      //   fromNoora: true,
      //   text: ""
      // },
      {
        id: -6,
        fromNoora: true,
        show: true,
        text: "Are you ready to begin?",
      },
    ]);
    convoState.setValue((cs: any) => ({ ...cs, turn: "user-answer-start" }));
  }, []);

  // scrolling
  useEffect(() => {
    setTimeout(() => {
      if (messagesBottom.current)
        if (
          history.value
            .slice(0, Math.min(history.value.length, 10))
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
        {history.value.map((message: any) => (
          <Message message={message} audioRef={audioRef} convoState={convoState} key={message.id} />
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
import React, { useContext } from "react";
import { PlaygroundContext } from "../Playground";
import NooraChat from "./NooraChat";

export default function Practice() {
  const { practice } = useContext(PlaygroundContext);
  const { draft, history, convoState } = practice;

  return (
    <div className="bg-gray-100">
      <div className="pt-16 container flex items-center flex-row justify-center">
        <NooraChat draft={draft} history={history} convoState={convoState} />
      </div>
    </div>
  );
}

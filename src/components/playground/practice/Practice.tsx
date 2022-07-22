import React, { useContext } from "react";
import { PlaygroundContext } from "../Playground";
import NooraChat from "./chat/NooraChat";
import Menu from "./menu/Menu";
import Summary from "./summary/Summary";

export default function Practice() {
  const { practice } = useContext(PlaygroundContext);
  const { draft, history, convoState, summary } = practice;

  // prop drilling beyond this point is intentional (for the re-usability of components)

  return (
    <div className="bg-gray-100 pt-14">
      <div className="py-4 container flex items-stretch flex-col md:flex-row justify-center md:space-x-2 space-y-2 md:space-y-0">
        <div className="basis-auto md:basis-7/12  lg:basis-3/4 w-full mx-auto">
          {summary.value.show ? (
            <Summary
              draft={draft}
              history={history}
              convoState={convoState}
              summary={summary}
            />
          ) : (
            <NooraChat
              draft={draft}
              history={history}
              convoState={convoState}
              summary={summary}
            />
          )}
        </div>
        <div className="basis-auto md:basis-5/12 lg:basis-1/4 w-full mx-auto md:min-h-full">
          <Menu convoState={convoState} />
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { PlaygroundContext } from "../Playground";
import AskNooraComponent from "../../interfaces/ask-noora-interface/AskNooraComponent";

export default function AskNooraPlayground() {
  const { askNoora } = useContext(PlaygroundContext);
  const { query, results, resultsQueue } = askNoora;

  return (
    <div>
      <AskNooraComponent
        query={query}
        results={results}
        resultsQueue={resultsQueue}
      />
    </div>
  );
}

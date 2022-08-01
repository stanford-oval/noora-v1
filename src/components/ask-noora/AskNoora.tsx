import React, { useState } from "react";
import AskNooraComponent from "../ask-noora-interface/AskNooraComponent";

export default function AskNoora() {
  const [q, setQ] = useState("");
  const [r, setR] = useState([
    {
      id: -1,
      statement: "I just finished a really good book!",
      explanation:
        "You should show me that you are interested in my experiences by asking me about my book.",
      reply: "That's great! What was your favorite part of the book?",
    },
  ]);
  const [rq, setRq] = useState<any[]>([]);

  const query = {
    value: q,
    setValue: setQ,
  };
  const results = {
    value: r,
    setValue: setR,
  };
  const resultsQueue = {
    value: rq,
    setValue: setRq,
  };

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

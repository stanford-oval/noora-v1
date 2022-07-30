import React, { useState } from "react";
import AskNooraComponent from "../ask-noora-interface/AskNooraComponent";

export default function AskNoora() {
  const [q, setQ] = useState("");
  const [r, setR] = useState([
    {
      id: -1,
      statement: "I just finished a really good book!",
      good_replies: [
        {
          category: "curious",
          reasoning: "You want to know more about the good book I read.",
          reply:
            "“What book did you read? What was your favorite part of the book?”",
          rating: "Good answer.",
          explanation:
            "You showed me you are interested in my experiences and you asked about my book.",
        },
      ],
      bad_replies: [
        {
          category: "know-it-all",
          reasoning:
            "You feel the need to tell me the benefits of reading and why it's important.",
          reply:
            "“Reading is good for your brain and helps you understand the world better. You should read more.”",
          rating: "Bad answer.",
          explanation:
            "To be a good friend, you should not say that because you do not acknowledge my happiness and tell me what to do.",
        },
      ],
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

import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
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
  const [resultsQueue, updateResultsQueue] = useState<any[]>([]);

  useEffect(() => {
    // on queue change, update the right element
    resultsQueue.forEach((result) => {
      const newResults: any[] = results.map((r) => {
        if (r.id == result.id) return result;
        else return r;
      });

      updateResults(newResults);

      updateResultsQueue([]); // empty queue
    });
  }, [resultsQueue]);

  return (
    <div>
      <div
        className="pt-16 bg-cover bg-no-repeat bg-center overflow-hidden"
        id="nooraRepliesHero"
      >
        <div className="pt-12 pb-32">
          <div className="container text-center justify-center">
            <p className="inline leading-tight bg-gradient-to-r from-noora-primary-dark1 via-noora-primary-dark2 to-noora-secondary-bright bg-clip-text font-bold text-5xl tracking-tight text-transparent">
              Ask Noora
            </p>
            <h2 className="mt-3 text-2xl max-w-lg tracking-tight text-slate-800 mx-auto">
              Tell Noora anything, and she will give you some good and bad
              replies.
            </h2>
            <InputForm
              query={query}
              updateQuery={updateQuery}
              results={results}
              updateResults={updateResults}
              updateResultsQueue={updateResultsQueue}
            />
          </div>
        </div>
      </div>
      <div className="container -mt-32 py-6">
        <ul>
          {results
            .slice(0)
            .reverse()
            .map((result, idx) => (
              <li key={result.id}>
                <Result
                  statement={result.statement}
                  good_replies={result.good_replies}
                  bad_replies={result.bad_replies}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

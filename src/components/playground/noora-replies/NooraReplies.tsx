import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      statement: "Example statement",
      replies: [
        {
          statement: "Example statement",
          category: "Example category",
          reasoning: "Example reasoning",
          reply: '"Example reply"',
          rating: "Good answer.",
          explanation: "Example explanation",
        },
        {
          statement: "Example statement 2",
          category: "Example category ",
          reasoning: "Example reasoning 2",
          reply: '"Example reply 2"',
          rating: "Bad answer.",
          explanation: "Example explanation 2",
        },
      ],
    },
  ]);
  const [resultsQueue, updateResultsQueue] = useState<any[]>([]);

  useEffect(() => {
    // on queue change, update the right element
    resultsQueue.forEach((result) => {
      const newResults: any[] = results.map((r) => {
        if (r.statement == result.statement) return result;
        else return r;
      });

      updateResults(newResults);

      updateResultsQueue([]); // empty queue
    });
  }, [resultsQueue]);

  return (
    <div>
      <div>
        <h1>Noora</h1>
        <h2>
          Tell Noora anything, and she will give you some good and bad replies.
        </h2>
        <InputForm
          query={query}
          updateQuery={updateQuery}
          results={results}
          updateResults={updateResults}
          updateResultsQueue={updateResultsQueue}
        />
        <ul>
          {results
            .slice(0)
            .reverse()
            .map((result, idx) => (
              <li key={idx}>
                <Result
                  index={results.length - idx}
                  statement={result.statement}
                  replies={result.replies}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    { statement: "Example statement", replies: [] },
  ]);

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

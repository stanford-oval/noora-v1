import React, { useState } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      statement: "Example Statement",
      replies: [
        { reply: "Example reply", category: "Sarcastic", good_answer: false},
      ],
    },
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
        <div className="bg-gray-100 mb-2">
          <pre>Your query: {query}</pre>
        </div>
        {results
          .slice(0)
          .reverse()
          .map((result, index) => (
            <Result
              index={results.length - index}
              statement={result.statement}
              replies={result.replies}
            />
          ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import InputForm from "./InputForm";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      statement: "Example Statement",
      replies: [
        { reply: "Example reply", category: "Sarcastic", rating: "Bad reply" },
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
        <div className="bg-gray-100">
          <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

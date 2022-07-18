import React, { useState } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      statement: "Example Statement",
      replies: [
        { reply: "Example reply", category: "Sarcastic", good_answer: false },
      ],
    },
  ]);

  let testingFunction = async (e: any) => {
    e.preventDefault();
    console.log("IN TESTING FUNCTION");
    // let result = await generateResult(query);

    const data = {
      prompt: "this is my prompt\n",
    };

    console.log(JSON.stringify(data));

    let reply = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log(reply);
    if (reply) reply = reply.name;

    updateQuery(reply);
  };

  return (
    <div>
      <div>
        <h1>Noora</h1>
        <h2>
          Tell Noora anything, and she will give you some good and bad replies.
        </h2>
        <button
          onClick={(e) => testingFunction(e)}
          className="text-white bg-red-800 px-4 py-2 rounded-full"
        >
          TESTING
        </button>
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
            .map((result, index) => (
              <li key={index}>
                <Result
                  index={results.length - index}
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

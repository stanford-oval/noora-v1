import React from "react";

export default function Result({ index, statement, replies }: ResultProps) {
  return (
    <div className="bg-gray-100 mb-2">
      {index}: {statement}
      <ul>
        {replies ? (
          replies.map((reply, idx) => (
            <li key={idx}>
              <pre>{JSON.stringify(reply, null, 2)}</pre>
            </li>
          ))
        ) : (
          <p>This will take around 20 seconds...</p>
        )}
      </ul>
    </div>
  );
}

type ResultProps = {
  index: number;
  statement: string;
  replies: any[];
};

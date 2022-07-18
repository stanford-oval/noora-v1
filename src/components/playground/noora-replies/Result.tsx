import React from "react";

export default function Result({ index, statement, replies }: ResultProps) {
  return (
    <div className="bg-gray-100 mb-2">
      {index}: {statement}
      <ul>
        {replies &&
          replies.map((reply) => (
            <li key={reply}>
              {reply.good_answer ? "good answer" : "bad answer"}: {reply.reply}{" "}
              ({reply.category})
            </li>
          ))}
      </ul>
    </div>
  );
}

type ResultProps = {
  index: number;
  statement: string;
  replies: any[];
};

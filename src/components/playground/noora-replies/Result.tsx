import React from "react";

export default function Result({ index, statement, replies }: ResultProps) {
  return (
    <div className="bg-gray-100 mb-2">
      {index}: {statement}
      {replies.map((reply) => (
        <div>
          {reply.good_answer ? "good answer" : "bad answer"}: {reply.reply} (
          {reply.category})
        </div>
      ))}
    </div>
  );
}

type ResultProps = {
  index: number;
  statement: string;
  replies: any[];
};

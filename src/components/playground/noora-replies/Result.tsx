import React from "react";

export default function Result({ index, statement, replies }: ResultProps) {
  return (
    <div className="bg-white mb-2 rounded-md border-2 border-gray-300 p-5">
      {index}: {statement}
      <ul>
        {replies ? (
          replies.map((reply, idx) => (
            <li key={idx}>
              {reply.rating && reply.reply && reply.explanation && (
                <div className="p-2 m-2 bg-slate-300">
                  <p>{reply.rating}</p>
                  <p>{reply.reply}</p>
                  <p>If you replied with this:</p>
                  <p>{reply.explanation}</p>
                </div>
              )}
            </li>
          ))
        ) : (
          <p className="font-bold text-xl">
            This will take around 25 seconds...
          </p>
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

import React from "react";
import { clsx } from "clsx";

export default function Result({
  statement,
  good_replies,
  bad_replies,
}: ResultProps) {
  return (
    <div className="bg-white mb-2 rounded-md border-2 border-gray-300 p-5">
      <div className="w-full border-b-2 text-center mb-2 pb-2 font-medium text-slate-800 text-xl md:text-2xl">
        &ldquo;{statement}&rdquo;
      </div>
      {good_replies || bad_replies ? (
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {good_replies && (
            <ul className="col-span-1">
              {good_replies.map((reply, idx) => (
                <li key={idx}>
                  {reply.reply && reply.explanation && (
                    <Reply
                      reply={reply.reply}
                      explanation={reply.explanation}
                      category={reply.category}
                      good_reply={true}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
          {bad_replies && (
            <ul className="col-span-1">
              {bad_replies.map((reply, idx) => (
                <li key={idx}>
                  {reply.reply && reply.explanation && (
                    <Reply
                      reply={reply.reply}
                      explanation={reply.explanation}
                      category={reply.category}
                      good_reply={false}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="text-center text-slate-500">
          Generating responses takes around 25 seconds. Feel free to submit more
          statements while you're waiting.
        </div>
      )}
    </div>
  );
}

function Reply({ reply, explanation, category, good_reply }: ReplyProps) {
  return (
    <div
      className={clsx(
        "p-3 border-2 rounded-lg",
        good_reply
          ? "border-green-500 bg-green-100"
          : "border-red-500 bg-red-100"
      )}
    >
      <p className="text-slate-800 text-lg">
        {reply}
        <span className="inline-block ml-2 border-1 items-center px-2 py-0.5 rounded-full text-xs font-normal -top-0.5 relative bg-gray-200 border-gray-800 text-gray-800">
          {category}
        </span>
      </p>
      <div className="text-slate-600 mt-2 font-light">
        <p>If you replied with this:</p>
        <p>
          <i>{explanation}</i>
        </p>
      </div>
    </div>
  );
}

type ResultProps = {
  statement: string;
  good_replies: any[];
  bad_replies: any[];
};

type ReplyProps = {
  reply: string;
  category: string;
  explanation: string;
  good_reply: boolean;
};

import React from "react";
import { clsx } from "clsx";

export default function Result({
  statement,
  good_replies,
  bad_replies,
  id,
  results,
  updateResults,
}: ResultProps) {
  return (
    <div
      className={clsx(
        "mb-2 rounded-md border-2 p-5 relative shadow-md",
        id == -1 ? "bg-gray-100 border-gray-400" : "bg-white border-gray-300"
      )}
    >
      {id != -1 && (
        <button
          onClick={() => {
            // remove
            console.log(id);
            let newResults = results.filter((r) => r.id !== id);
            updateResults(newResults);
          }}
          className="absolute top-2 right-2.5 text-gray-500 rounded-full h-6 w-6 focus:bg-gray-200 bg-white focus:text-gray-700"
        >
          &#x2715;
        </button>
      )}
      <div
        className={clsx(
          "w-full border-b-2 mb-2 pb-2 font-medium text-slate-800 text-xl md:text-2xl text-center px-5",
          id == -1 ? "border-gray-400" : "border-gray-300"
        )}
      >
        &ldquo;{statement}&rdquo;
        {id == -1 && (
          <span className="inline-flex relative ml-3 -top-1 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-noora-primary-dark border-1 border-noora-primary-dark">
            EXAMPLE
          </span>
        )}
      </div>
      {good_replies || bad_replies ? (
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {good_replies && (
            <div>
              <h1 className="text-lg md:text-xl text-green-700 font-medium text-center md:text-left">
                Good Replies
              </h1>
              <ul className="col-span-1 space-y-1 mt-1">
                {good_replies.map((reply, idx) => (
                  <li key={idx}>
                    <Reply
                      reply={reply.reply}
                      explanation={reply.explanation}
                      category={reply.category}
                      good_reply={true}
                    />
                  </li>
                ))}{" "}
                {good_replies.length == 0 && (
                  <div className="text-center md:text-left text-slate-500">
                    Oops! Noora didn't generate any good replies. Please try
                    again.
                  </div>
                )}
              </ul>
            </div>
          )}
          {bad_replies && (
            <div>
              <h1 className="text-lg md:text-xl text-red-700 font-mediumm text-center md:text-left font-medium">
                Bad Replies
              </h1>
              <ul className="col-span-1 space-y-1 mt-1">
                {bad_replies.map((reply, idx) => (
                  <li key={idx}>
                    <Reply
                      reply={reply.reply}
                      explanation={reply.explanation}
                      category={reply.category}
                      good_reply={false}
                    />
                  </li>
                ))}
                {bad_replies.length == 0 && (
                  <div className="text-center md:text-left text-slate-500">
                    Oops! Noora didn't generate any bad replies. Please try
                    again.
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-slate-500">
          Generating responses takes around 25 seconds. Feel free to submit more
          statements while you&apos;re waiting.
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
          ? "border-green-700 bg-green-100"
          : "border-red-700 bg-red-100"
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
  id: number;
  results: any[];
  updateResults: any;
};

type ReplyProps = {
  reply: string;
  category: string;
  explanation: string;
  good_reply: boolean;
};

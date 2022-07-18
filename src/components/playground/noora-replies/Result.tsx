import React from "react";
import { clsx } from "clsx";

export default function Result({
  statement,
  good_replies,
  bad_replies,
}: ResultProps) {
  return (
    <div className="bg-white mb-2 rounded-md border-2 border-gray-300 p-5">
      <div className="w-full border-b-2 text-center mb-2 pb-2 text-slate-800 text-xl md:text-2xl">
        &ldquo;{statement}&rdquo;
      </div>
      <ul>
        {good_replies || bad_replies ? (
          <>
            {good_replies &&
              good_replies.map((reply, idx) => (
                <li key={idx}>
                  {reply.rating && reply.reply && reply.explanation && (
                    <Reply
                      rating={reply.rating}
                      reply={reply.reply}
                      explanation={reply.explanation}
                      category={reply.category}
                      good_reply={true}
                    />
                  )}
                </li>
              ))}
            {bad_replies &&
              bad_replies.map((reply, idx) => (
                <li key={idx}>
                  {reply.rating &&
                    reply.reply &&
                    reply.explanation &&
                    reply && (
                      <Reply
                        rating={reply.rating}
                        reply={reply.reply}
                        explanation={reply.explanation}
                        category={reply.category}
                        good_reply={false}
                      />
                    )}
                </li>
              ))}
          </>
        ) : (
          <div className="text-center text-slate-500">
            Generating responses takes around 25 seconds. Feel free to
            submit more statements while you're waiting.
          </div>
        )}
      </ul>
    </div>
  );
}

function Reply({ rating, reply, explanation, good_reply }: ReplyProps) {
  return (
    <div
      className={clsx(
        "p-3 border-2 rounded-lg",
        good_reply
          ? "border-green-500 bg-green-100"
          : "border-red-500 bg-red-100"
      )}
    >
      <p>{reply}</p>
      <p>{rating}</p>
      <p>If you replied with this:</p>
      <p>{explanation}</p>
    </div>
  );
}

type ResultProps = {
  statement: string;
  good_replies: any[];
  bad_replies: any[];
};

type ReplyProps = {
  rating: string;
  reply: string;
  category: string;
  explanation: string;
  good_reply: boolean;
};

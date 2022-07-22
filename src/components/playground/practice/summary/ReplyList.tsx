import React from "react";
import { clsx } from "clsx";

export default function ReplyList({ convoState }: any) {
  return (
    <div
      id="chat-window"
      className="overflow-y-auto pretty-scroll p-2 space-y-2 bg-white border-l-2 border-r-2 border-gray-400"
    >
      {convoState.value.progress.map((problem: any, idx: number) => (
        <div
          key={idx}
          className={clsx(
            "p-3 border-2 rounded-lg flex flex-row items-center",
            problem.goodAnswer
              ? "border-green-700 bg-green-100"
              : "border-red-700 bg-red-100"
          )}
        >
          <div
            className={clsx(
              "flex-fit text-bold pr-4 lg:pr-6 lg:pl-2 text-2xl lg:text-4xl font-bold",
              problem.goodAnswer ? "text-green-700" : "text-red-700"
            )}
          >
            {idx + 1}
          </div>
          <div className="flex-grow">
            <div className="text-slate-600">
              <p>I said, &ldquo;{problem.statement}&rdquo;</p>
              <p>
                You replied,{" "}
                <span className="text-slate-800 text-lg font-bold">
                  &ldquo;{problem.reply}&rdquo;
                </span>
              </p>
            </div>
            <div
              className={clsx(
                "border-1 mx-auto w-full my-2",
                problem.goodAnswer ? "border-green-400" : "border-red-300"
              )}
            ></div>
            <div className="text-slate-600 mt-2 font-light">
              <p>
                <i>{problem.explanation}</i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

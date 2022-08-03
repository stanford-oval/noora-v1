import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer({ convoState, history, draft }: any) {
  return (
    <div className="bg-gray-100 border-2 border-gray-400 rounded-b-lg py-4 text-center flex gap-2 justify-center">
      <Link href="/dashboard#modules">
        <button className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full text-white bg-noora-primary hover:bg-noora-primary-dark">
          See Other Modules
        </button>
      </Link>
      <button
        onClick={() => {
          // reset
          history.setValue([]);
          convoState.setValue((cs: any) => ({
            ...cs,
            draft: "",
            turn: "user-answer",
            numProblems: 10,
            modules: [
              { title: "general", active: true },
              { title: "work", active: true },
            ],
            progress: [],
          }));
        }}
        className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full text-white bg-noora-secondary-light hover:bg-noora-secondary"
      >
        Try Again
        <FontAwesomeIcon icon={faRepeat} className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}

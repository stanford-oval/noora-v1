import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getIdTokenResult } from "firebase/auth";
import { useAuth } from "../../../../Authenticate";

export default function Footer({ convoState, history }: any) {
  const [user] = useAuth(); // Get current user
  const [numProblems, setNumProblems] = useState(10); // Default to 10

  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        const token = await getIdTokenResult(user);
        const role =
          typeof token.claims.role === "string" ? token.claims.role : "user";
        setNumProblems(role === "rq-study" ? 20 : 10);
      }
    };
    fetchRole();
  }, [user]);

  return (
    <div className="bg-gray-100 border-2 border-gray-400 rounded-b-lg py-4 text-center flex gap-2 justify-center">
      <Link href="/dashboard#progress">
        <button className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full text-white bg-noora-primary hover:bg-noora-primary-dark">
          See Your Progress
        </button>
      </Link>
      <button
        onClick={() => {
          // reset
          history.setValue([]);
          convoState.setValue((cs: any) => ({
            ...cs,
            draft: "",
            turn: "user-answer-start",
            numProblems: numProblems, // Dynamically set numProblems
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

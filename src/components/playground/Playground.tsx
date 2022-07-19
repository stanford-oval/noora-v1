import React, { Fragment, createContext, useState, useMemo } from "react";
import AskNoora from "./ask-noora/AskNoora";
import { Tab } from "@headlessui/react";
import { clsx } from "clsx";
import Practice from "./practice/Practice";

export const PlaygroundContext = createContext<any>({
  askNoora: {
    query: {
      value: "",
      updateValue: () => {},
    },
    results: {
      value: "",
      updateValue: () => {},
    },
    resultsQueue: {
      value: "",
      updateValue: () => {},
    },
  },
});

export default function Playground() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      id: -1,
      statement: "I just finished a really good book!",
      good_replies: [
        {
          category: "curious",
          reasoning: "You want to know more about the good book I read.",
          reply:
            "“What book did you read? What was your favorite part of the book?”",
          rating: "Good answer.",
          explanation:
            "You showed me you are interested in my experiences and you asked about my book.",
        },
      ],
      bad_replies: [
        {
          category: "know-it-all",
          reasoning:
            "You feel the need to tell me the benefits of reading and why it's important.",
          reply:
            "“Reading is good for your brain and helps you understand the world better. You should read more.”",
          rating: "Bad answer.",
          explanation:
            "To be a good friend, you should not say that because you do not acknowledge my happiness and tell me what to do.",
        },
      ],
    },
  ]);
  const [resultsQueue, updateResultsQueue] = useState<any[]>([]);

  const value = useMemo(
    () => ({
      askNoora: {
        query: {
          value: query,
          updateValue: updateQuery,
        },
        results: {
          value: results,
          updateValue: updateResults,
        },
        resultsQueue: {
          value: resultsQueue,
          updateValue: updateResultsQueue,
        },
      },
    }),
    [query, updateQuery]
  );

  return (
    <PlaygroundContext.Provider value={value}>
      <div className="pt-16"></div>

      <Tab.Group>
        <Tab.List>
          <nav
            className="fixed w-screen z-20 flex divide-x divide-gray-200"
            aria-label="Tabs"
          >
            {["Practice", "Ask Noora"].map((title) => {
              return (
                <Tab as={Fragment} key={title}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        "text-gray-900 group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10",
                        selected ? "bg-gray-100" : "hover:bg-gray-50 bg-white"
                      )}
                    >
                      <span
                        className={clsx(
                          "text-lg",
                          selected
                            ? "text-noora-primary-main font-bold"
                            : "text-gray-700"
                        )}
                      >
                        {title}
                      </span>
                      <span
                        aria-hidden={true}
                        className={clsx(
                          "absolute inset-x-0 bottom-0 h-1",
                          selected ? "bg-noora-primary-main" : "bg-gray-300"
                        )}
                      />
                    </button>
                  )}
                </Tab>
              );
            })}
          </nav>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Practice />
          </Tab.Panel>
          <Tab.Panel>
            <AskNoora />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </PlaygroundContext.Provider>
  );
}

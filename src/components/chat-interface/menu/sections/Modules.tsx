import React from "react";
import { clsx } from "clsx";
import { PlusIcon } from "@heroicons/react/solid";

export default function Modules({ convoState }: any) {
  return (
    <div className="space-y-1 pt-3 pb-1 px-1">
      <Topics convoState={convoState} />
      <Sentiments convoState={convoState} />
    </div>
  );
}

function Topics({ convoState }: any) {
  return (
    <div>
      Sentiments:{" "}
      <span className="space-x-1">
        {convoState.value.modules
          // .sort((m1: any, m2: any) => (m2.active && !m1.active ? 1 : -1))
          .map((module: any) => {
            return (
              <button
                disabled={
                  convoState.value.modules.filter((m: any) => m.active)
                    .length == 1 && module.active
                }
                onClick={() => {
                  // toggle category active/inactive
                  let newModules = convoState.value.modules.map((m: any) => {
                    if (m.title == module.title)
                      return { title: m.title, active: !m.active };
                    else return m;
                  });
                  convoState.setValue((cs: any) => ({
                    ...cs,
                    modules: newModules,
                  }));
                }}
                key={module.title}
                className={clsx(
                  "group inline-block border-1 items-center px-2 py-0.5 rounded-full text-xs relative",
                  module.active
                    ? "bg-purple-100 text-noora-primary-dark border-noora-primary-dark font-bold"
                    : "bg-gray-200 border-gray-500 text-gray-600"
                )}
              >
                {module.title}{" "}
                {module.active ? (
                  <span className="group-disabled:hidden">&#x2715;</span>
                ) : (
                  <PlusIcon className="h-3 w-3 mb-0.5 inline-block" />
                )}
              </button>
            );
          })}
      </span>
    </div>
  );
}

function Sentiments({ convoState }: any) {
  return (
    <div>
      Topics:{" "}
      <span className="flex gap-x-3 gap-y-1">
        {convoState.value.sentiments.map((sentiment: any) => {
          return (
            <div key={sentiment.title} className="form-check">
              <label className="form-check-label inline-block text-gray-800 cursor-pointer">
                <input
                  className="form-check-input h-4 w-4 border border-gray-400 rounded-sm bg-white checked:bg-noora-primary checked:hover:bg-noora-primary checked:focus:bg-noora-primary outline-none ring-0 focus:ring-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-1 cursor-pointer"
                  type="checkbox"
                  checked={sentiment.active}
                  onChange={() => {
                    // toggle category active/inactive
                    let newSentiments = convoState.value.sentiments.map(
                      (s: any) => {
                        if (s.title == sentiment.title)
                          return { title: s.title, active: !s.active };
                        else return s;
                      }
                    );
                    convoState.setValue((cs: any) => ({
                      ...cs,
                      sentiments: newSentiments,
                    }));
                  }}
                />
                <span className="inline-block mt-0.5">
                  {sentiment.title.charAt(0).toUpperCase() +
                    sentiment.title.slice(1)}
                </span>
              </label>
            </div>
          );
        })}
      </span>
    </div>
  );
}

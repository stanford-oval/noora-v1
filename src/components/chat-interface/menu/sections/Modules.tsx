import React from "react";
import { clsx } from "clsx";

export default function Modules({ convoState }: any) {
  return (
    <div className="space-x-1 pt-3 pb-1 px-1">
      {convoState.value.modules
        .sort((m1: any, m2: any) => (m2.active && !m1.active ? 1 : -1))
        .map((module: any) => {
          return (
            <button
              disabled={
                module.fixed ||
                (convoState.value.modules.filter((m: any) => m.active).length ==
                  1 &&
                  module.active)
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={clsx(
                    "h-3 w-3 inline-block",
                    module.fixed ? "hidden" : ""
                  )}
                  style={{ marginTop: "-0.2rem" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </button>
          );
        })}
    </div>
  );
}

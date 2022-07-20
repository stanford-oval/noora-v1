import React from "react";
import { clsx } from "clsx";

export default function Header({ convoState }: any) {
  return (
    <div className="w-full bg-white p-2 pt-3 border-2 border-gray-400 rounded-t-md">
      <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-noora-primary-light via-noora-primary-dark to-noora-primary-dark2"></div>
      <div className="text-2xl text-center font-bold text-noora-primary-dark2">
        Noora
      </div>
      <div className="text-center">
        {convoState.value.modules.map((module: any) => {
          return (
            <button
              disabled={
                convoState.value.modules.filter((m: any) => m.active).length ==
                  1 && module.active
              }
              onClick={() => {
                // toggle category active/inactive
                let newModules = convoState.value.modules.map((m: any) => {
                  if (m.title == module.title)
                    return { title: m.title, active: !m.active };
                  else return m;
                });
                convoState.setValue({
                  ...convoState.value,
                  modules: newModules,
                });
              }}
              key={module.title}
              className={clsx(
                "group inline-block mx-0.5 border-1 items-center px-2 py-0.5 rounded-full text-xs relative",
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
                  className="h-3 w-3 inline-block"
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
    </div>
  );
}

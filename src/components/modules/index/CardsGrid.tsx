import React from "react";
import Link from "next/link";
import modules from "../../../data/modules";

export default function CardsGrid() {
  return (
    <div className="container pt-2 pb-8 md:pb-10">
      <div className="flex flex-row items-stretch justify-center flex-wrap w-full">
        {Object.values(modules).map((module, idx) => (
          <div key={module.title} className="group relative md:w-1/2 p-1">
            <div className="bg-gray-100 trans-150 p-6 rounded-md border-2 h-full border-gray-200 group-hover:border-gray-300">
              <div>
                <span className="rounded-lg inline-flex bg-indigo-50 border-2 border-indigo-100 text-indigo-700 p-0.5">
                  <module.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">
                  <Link
                    href={"/modules/noora?module=" + Object.keys(modules)[idx]}
                  >
                    <a className="text-noora-secondary-light">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {module.title}
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-base text-gray-500">{module.desc}</p>
              </div>
              <span
                className="pointer-events-none trans-300 absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

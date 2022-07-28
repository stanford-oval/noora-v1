import React from "react";
import Link from "next/link";

export default function CardsGrid() {
  return (
    <div className="container pt-6 pb-10">
      <div className="flex flex-row w-full gap-2">
        {[
          { title: "Testing", content: "whatever", href: "/modules" },
          { title: "Testing", content: "whatever", href: "/modules" },
        ].map(({ title, content, href }) => (
          <div key={title} className="group relative flex-1/2 w-full">
            <div className="bg-gray-100 trans-150 p-6 rounded-md  border-2 border-gray-200 group-hover:border-gray-300">
              <div>
                <span className="rounded-lg inline-flex bg-indigo-50 text-indigo-700 p-1">
                  {/* Heroicon name: calendar */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">
                  {href ? (
                    href.startsWith("/") ? (
                      <Link href={href}>
                        <a className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {title}
                        </a>
                      </Link>
                    ) : (
                      <a href={href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                      </a>
                    )
                  ) : (
                    <>{title}</>
                  )}
                </h3>
                <p className="mt-2 text-base text-gray-500">{content}</p>
              </div>
              {href && (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

export default function Preamble({ module }: any) {
  return (
    <div className="pt-16">
      <div className="container pt-4 pb-6 md:pt-5 md:pb-8">
        <Link href="/modules">
          <button className="-ml-1 font-medium flex text-gray-500">
            <ChevronLeftIcon className="h-5 w-5 mt-0.5 inline-block" />
            See all modules
          </button>
        </Link>
        <p className="inline font-bold text-noora-primary-dark1 font-display text-4xl tracking-tight text-transparent">
          <span className="special-underline">{module.title}</span> module
          {module.title == "All" ? "s" : ""}
        </p>
        <div className="mt-3 text-lg font-base tracking-tight text-gray-700 flex flex-col gap-y-2">
          <p>{module.selectedDesc}</p>

          <p>
            For example, if Noora says “
            <b className="text-noora-primary-main special-underline">
              {module.example.noora}
            </b>
            ,” a good response might be “
            <b className="text-noora-secondary-light special-underline">
              {module.example.goodUser}
            </b>
            ”{" "}
            <span className="text-gray-500">
              {module.example.goodExplanation}
            </span>
          </p>

          <p>
            If you respond with a response that needs improvement, such as “
            <b className="text-noora-secondary-light special-underline">
              {module.example.badUser}
            </b>
            ,” Noora will provide you with feedback. and will offer a model
            {/* with a different response. */}
          </p>
        </div>
      </div>
    </div>
  );
}

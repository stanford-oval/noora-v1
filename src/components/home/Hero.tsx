import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div
      className="bg-noora-secondary-main pt-16 bg-cover bg-no-repeat bg-center overflow-hidden"
      id="homeHero"
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-10 md:col-span-7 lg:col-span-8">
            <p className="inline leading-tight bg-gradient-to-r from-fuchsia-100 via-purple-300 to-violet-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Improve your social skills using AI.
            </p>
            <p className="mt-3 text-2xl tracking-tight text-slate-400">
              Designed by Stanford's Open Virtual Assistant Lab, Noora is a
              chatbot who guides you through a diverse set of social scenarios.
            </p>
            <div className="mt-6 mb-2 flex gap-4 justify-start flex-wrap">
              <Link href="/playground">
                <button className="button button-light font-medium">
                  Visit Playground
                </button>
              </Link>
              <a
                href="https://oval.cs.stanford.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="button bg-slate-800 font-light text-white hover:bg-slate-700 active:text-slate-400"
              >
                Stanford OVAL
                <FontAwesomeIcon
                  className="-mr-1 ml-2 h-4 w-4 inline-block -mt-1 text-gray-400"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

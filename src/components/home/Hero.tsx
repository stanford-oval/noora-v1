import React from "react";
import Link from "next/link";
import { ArrowSmRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div
      className="bg-[#ECEFF5] bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen flex flex-col justify-center align-center"
      id="homeHero"
    >
      <div className="container pb-12 md:py-18 pt-24 lg:pt-14">
        <div className="grid grid-cols-12 items-center justify-between text-center md:text-left gap-y-8 sm:gap-y-6 sm:gap-x-12 lg:gap-x-0">
          <div className="px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-6 md:col-start-0 xl:col-span-6">
            <p className="inline leading-tight bg-gradient-to-r from-noora-primary-dark via-noora-secondary-light to-noora-primary-dark1 bg-clip-text font-bold text-4xl xl:text-5xl tracking-tight text-transparent">
              Improve your social skills using AI.
            </p>
            <p className="mt-3 text-xl xl:text-2xl tracking-tight text-gray-600">
              Developed by Stanford&apos;s Open Virtual Assistant Lab, Noora is
              a chatbot who guides you through a diverse set of social
              scenarios.
            </p>
            <div className="mt-6 mb-2 flex gap-x-3 gap-y-2 flex-wrap justify-center md:justify-start">
              <Link href="/modules/noora?module=general">
                <button className="button flex text-lg text-white bg-noora-primary-main hover:bg-noora-primary-dark font-medium">
                  Meet Noora{" "}
                  <ArrowSmRightIcon className="h-6 w-6 mt-0.5 ml-0.5" />
                </button>
              </Link>
              <a
                href="https://oval.cs.stanford.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button flex text-lg text-gray-600 bg-gray-300 hover:bg-[#C9CDD4] font-light">
                  Stanford OVAL{" "}
                  <ExternalLinkIcon className="h-4 w-4 mt-1.5 ml-1 stroke-1" />
                </button>
              </a>
            </div>
            <div className="mt-6 w-full col-span-12">
              <h2 className="uppercase text-gray-500">
                Designed By
              </h2>
              <div className="mt-2 w-full flex gap-x-4 justify-center md:justify-start">
                <img
                  src="/img/logos/stanford-logo.png"
                  className="col-span-5 h-12 w-auto"
                  alt="Stanford"
                />
                <img
                  src="/img/logos/stanford-medicine-logo.png"
                  className="col-span-5  h-12 w-auto"
                  alt="Stanford Medicine"
                />
              </div>
            </div>
          </div>
          <div className="px-4 col-span-12 sm:px-0 sm:col-span-8 sm:col-start-3 md:col-span-6 md:pt-8 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <img src="/img/demo.png" className="rounded-md" alt="Noora demo" />
          </div>
        </div>
      </div>
    </div>
  );
}

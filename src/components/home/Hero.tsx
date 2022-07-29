import React from "react";
import Link from "next/link";
import { ArrowSmRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div className="bg-gray-100 bg-cover bg-no-repeat bg-center overflow-hidden h-screen flex flex-col justify-center align-center">
      <div className="container py-14 md:py-18">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-10 md:col-span-7 lg:col-span-8">
            <p className="inline leading-tight bg-gradient-to-r from-noora-primary-dark via-noora-secondary-light to-noora-primary-dark1 bg-clip-text font-bold text-5xl tracking-tight text-transparent">
              Improve your social skills using AI.
            </p>
            <p className="mt-3 text-2xl tracking-tight text-gray-600">
              Developed by Stanford&apos;s Open Virtual Assistant Lab, Noora is
              a chatbot who guides you through a diverse set of social
              scenarios.
            </p>
            <div className="mt-6 mb-2 flex gap-4 justify-start flex-wrap">
              <Link href="/modules/noora?module=all">
                <button className="button flex text-lg text-white bg-noora-primary-main hover:bg-noora-primary-dark font-medium">
                  Meet Noora{" "}
                  <ArrowSmRightIcon className="h-6 w-6 mt-0.5 ml-0.5" />
                </button>
              </Link>
              <a href="">
                <button className="button flex text-lg text-gray-600 bg-gray-300 hover:bg-[#C9CDD4] font-light">
                  Stanford OVAL{" "}
                  <ExternalLinkIcon className="h-4 w-4 mt-1.5 ml-1 stroke-1" />
                </button>
              </a>
            </div>
            <div className="mt-6 w-full grid grid-cols-12">
              <h2 className="uppercase text-gray-500 col-span-12">
                Designed By
              </h2>
              <div className="col-span-6 mt-2 w-full grid grid-cols-12 gap-x-5 items-center">
                <img
                  src="/img/logos/stanford-logo.png"
                  className="col-span-5"
                  alt="Stanford"
                />
                <img
                  src="/img/logos/stanford-medicine-logo.png"
                  className="col-span-5"
                  alt="Stanford Medicine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold tracking-tight leading-tight text-gray-900 sm:text-3xl">
          <span className="block mb-0.5">Ready to try it out?</span>
          <span className="block text-noora-primary-main">
            See what Noora can do.
          </span>
        </h2>
        <div className="mt-7 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <Link href="/playground">
              <button className="inline-flex shadow items-center justify-center px-5 py-3 text-base font-medium rounded-full text-white bg-noora-primary-main hover:bg-noora-primary-dark">
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import DoubleGridBg from "./../utility/DoubleGridBg";

export default function About() {
  return (
    <div className="relative z-30 bg-gray-50 overflow-hidden">
      <DoubleGridBg />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="tracking-tight font-bold text-gray-900  text-5xl md:text-6xl">
              <span className="block xl:inline">noora </span>
              <span className="block text-noora-primary-main xl:inline">
                EconClubs
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-gray-500 text-xl md:text-2xl md:mt-5 md:max-w-3xl">
              <b>
                EconClubs is noora’s signature program and is designed to help
                students launch economics clubs at their own schools.
              </b>{" "}
              Every noora EconClub is provided with our custom-designed AP/IB
              curriculum, mentorship from our global leadership team, exclusive
              access to certain noora events, noora brand recognition, and support
              from an international community of aspiring economists. Existing
              economics clubs are also welcome to join the EconClubs program.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/clubs">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-noora-primary-main hover:bg-noora-primary-darker md:py-4 md:text-lg md:px-10 trans-300">
                    Learn More
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/clubs/current-clubs">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-noora-primary-main bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 trans-300">
                    Current Clubs
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import DoubleGridBg from "./../utility/DoubleGridBg";

export default function About() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <DoubleGridBg />
      <div className="relative py-12 md:py-16">
        <main className="mx-auto max-w-8xl px-4">
          <div className="text-center">
            <h1 className="tracking-tight font-medium text-gray-900  text-4xl">
              <span className="inline">About </span>
              <span className="inline text-noora-primary-main">Noora</span>
            </h1>
            <p className="mt-2 max-w-lg mx-auto text-gray-500 text-lg font-light md:text-xl md:mt-3 md:max-w-3xl">
              <span className="font-medium">
                Noora is a conversational AI designed to help improve the social
                skills of people with Autism Spectrum Disorder (ASD).
              </span>{" "}
              Dr. Lynn Koegel’s intervention method, pivotal response training, has
              been shown to help individuals make friends, have romantic
              relationships, collaborate in the workplace, and engage in leisure
              activities. However, its applicability is restricted by the lack
              of trained professionals. This project is to automate the
              intervention, the success of which can have a great impact on
              society, as 1 in 54 children is currently diagnosed with ASD.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

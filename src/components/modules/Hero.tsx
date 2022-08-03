import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import DisclosureTransition from "../global/utility/DisclosureTransition";

export default function Hero() {
  return (
    <div className="pt-16">
      <div className="container pt-6 md:pt-8">
        <p className="inline font-bold text-noora-secondary font-display text-4xl tracking-tight">
          Practice your{" "}
          <span className="special-underline">social skills</span>.
        </p>
        <div className="mt-3 text-lg font-base tracking-tight text-gray-700 flex flex-col gap-y-4">
          <p>
            Noora helps you practice challenging aspects of social conversation, such as{" "}
            <b>responding empathetically and positively to others</b>.
            {/* initiating and ending a
                  conversation, responding to bullying, and keeping a conversation
                  going. */}
          </p>

          <p>
            The goal is that after successfully completing these modules, you
            will <b>respond well during social conversation</b> and will{" "}
            <b>feel more comfortable and confident</b> when they come up in
            everyday situations.
          </p>

          {/* <Disclosure>
            {({ open }) => (
              <div className="mx-auto w-full rounded-2xl bg-white py-1">
                <DisclosureTransition>
                  <Disclosure.Panel>
                    <p className="mb-4">
                      <b>Each of our modules focuses on a different area</b>{" "}
                      that is commonly used during conversation. You will get a
                      score after each group of 10 practice opportunities and an
                      opportunity to improve your own score. We recommend that
                      you continue to practice until you get a score of above
                      80% on three consecutive tries, but feel free to complete
                      as many as you&apos;d like until you feel comfortable and
                      confident with your responses.
                      
                    </p>
                  </Disclosure.Panel>
                </DisclosureTransition>{" "}
                <Disclosure.Button className="flex">
                  <span className="font-bold text-noora-secondary-light">Show {open ? "less" : "more..."}</span>
                  <ChevronUpIcon
                    className={`${
                      !open ? "rotate-180 transform" : ""
                    } ml-0.5 mt-0.5 h-6 w-6 text-gray-500`}
                  />
                </Disclosure.Button>
              </div>
            )}
          </Disclosure> */}
        </div>
      </div>
    </div>
  );
}

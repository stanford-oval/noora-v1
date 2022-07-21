import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Modules from "./Modules";
import Progress from "./Progress";

export default function Menu({ convoState }: any) {
  const sections = [
    { title: "Modules", component: <Modules convoState={convoState} /> },
    { title: "Progress", component: <Progress convoState={convoState} /> },
  ];

  return (
    <div
      className="w-full bg-white border-2 border-gray-400 rounded-md h-fit md:min-h-full overflow-y-auto pretty-scroll"
    >
      <div className="border-b-2 border-gray-400 py-4">
        <div className="text-2xl text-center font-bold text-noora-primary-dark2">
          Playground
        </div>
      </div>
      <div className="px-2 py-1">
        {sections.map((section) => (
          <Disclosure key={section.title} defaultOpen>
            {({ open }) => (
              <div className="mx-auto w-full rounded-2xl bg-white py-1">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-noora-primary-dark2 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                  <span>{section.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>
                <DisclosureTransition>
                  <Disclosure.Panel className="text-sm text-gray-500">
                    {section.component}
                  </Disclosure.Panel>
                </DisclosureTransition>{" "}
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

function DisclosureTransition({ children }: any) {
  return (
    <Transition
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-80 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-200 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-80 opacity-0"
    >
      {children}
    </Transition>
  );
}

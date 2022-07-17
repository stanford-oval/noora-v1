import React from "react";
import routes from "../../../data/routes";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {routes.map((r: any) => (
            <div key={r.name} className="px-5 py-2">
              <a
                href={r.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {r.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {["s", "s"].map((r: any) => (
            // <a
            //   key={r.name}
            //   href={r.href}
            //   className="text-gray-400 hover:text-gray-500"
            // >
            //   <span className="sr-only">{item.name}</span>
            //   b
            // </a>
            <div>b</div>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          Noora is part of a research project of the{" "}
          <a
            href="https://oval.cs.stanford.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Open Virtual Assistant Lab
          </a>{" "}
          at Stanford University.
        </p>
      </div>
    </footer>
  );
}

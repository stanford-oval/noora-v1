import React, { useRef, useState, useEffect } from "react";
import routes from "../../../data/routes";
import { useRouter } from "next/router";

import { faPlus, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import NavItem from "./NavItem";

export default function Navbar() {
  const currPath = useRouter().pathname;

  return (
    <nav className="z-40 w-screen bg-white shadow fixed">
      <div className="container">
        <div className="flex justify-between h-16">
          <Link href="/">
            <a className="flex-shrink-0 flex items-center">
              <img
                className="block h-9 w-auto"
                src="/img/noora-logo-full.png"
                alt="Noora logo"
              />
              NOORA
            </a>
          </Link>
          <div className="flex">
            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 xl:space-x-8">
              {routes.map((r: any) => (
                <NavItem
                  key={r.name}
                  name={r.name}
                  href={r.href}
                  currPath={currPath}
                  dropRoutes={r.dropRoutes}
                  active={
                    r.href !== "/"
                      ? currPath.startsWith(r.href)
                      : r.href == currPath
                  }
                />
              ))}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/clubs/register">
                    <a
                      type="button"
                      className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yei-primary-main shadow-sm hover:bg-yei-primary-darker"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="-ml-1 mr-2 h-3 w-3"
                      />
                      <span>Register a Club</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

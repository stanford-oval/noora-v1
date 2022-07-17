import React from "react";
import {
  faAngleDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";

import Link from "next/link";
import { clsx } from "clsx";

export default function NavItemDrop({
  name,
  href,
  dropRoutes,
  itemStyle,
  currPath,
}: NavItemDropProps) {
  return (
    <Popover className="h-full">
      <Popover.Button className={clsx(itemStyle, "h-full")}>
        {name}{" "}
        <FontAwesomeIcon
          className="-mr-1 ml-1 h-4 w-4 inline-block"
          icon={faAngleDown}
        />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-white shadow">
        <div className="flex flex-col">
          {dropRoutes.map((r: any) => {
            if (!r.href && !r.href.includes("http"))
              r.href = href + r.href;
            return (
              <DropdownItem
                key={r.href}
                href={r.href}
                name={r.name}
                active={r.href == currPath}
              />
            );
          })}
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );

  return (
    <Link href={href}>
      <a className={itemStyle}>
        {name}
        <FontAwesomeIcon
          className="-mr-1 ml-1 h-4 w-4 inline-block"
          icon={faAngleDown}
        />
      </a>
    </Link>
  );
}

function DropdownItem({ href, name, active }: any) {
  const activeStyles = "bg-gray-100 border-noora-primary-main text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-300 block px-4 py-2 text-lg border-l-4 text-base font-medium ${
    active ? activeStyles : defaultStyles
  }`;

  if (href.includes("http"))
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(navItemStyle, "pr-7")}
      >
        {name}{" "}
        <FontAwesomeIcon
          className="-mr-1 ml-1 h-4 w-4 inline-block -mt-1"
          icon={faArrowUpRightFromSquare}
        />
      </a>
    );

  return (
    <Link href={href}>
      <a className={navItemStyle} role="menuitem">
        {name}
      </a>
    </Link>
  );
}

type NavItemDropProps = {
  name: string;
  href: string;
  dropRoutes: any[];
  itemStyle: string;
  currPath: string;
};

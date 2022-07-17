import React, { useState } from "react";
import Link from "next/link";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";

export default function MobileNavItem({
  name,
  href,
  active,
  currPath,
  dropRoutes,
}: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(active); // for collapsable
  const toggle = () => setExpanded(!expanded);

  const activeStyles = "bg-indigo-50 border-noora-primary-main text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-150 flex justify-items-stretch items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${
    (dropRoutes && active && !expanded) || (!dropRoutes && active)
      ? activeStyles
      : defaultStyles
  }`;

  if (dropRoutes) {
    return (
      <>
        <div onClick={toggle} className={navItemStyle}>
          {name}
          <FontAwesomeIcon
            className={clsx(
              "trans-150 ml-auto h-5 w-5 mr-4 inline-block",
              expanded ? "transform rotate-180" : "transform rotate-0"
            )}
            style={{ marginTop: "-0.1rem" }}
            icon={faAngleDown}
          />
        </div>

        <div className={expanded ? "block" : "hidden"}>
          {dropRoutes.map((r: any) => {
            let fullHref = href + (r.href == "/" ? "" : r.href);
            return (
              <NestedItem
                key={fullHref}
                href={fullHref}
                name={r.name}
                active={fullHref == currPath}
              />
            );
          })}
        </div>
      </>
    );
  }

  return (
    <Link href={href}>
      <a className={navItemStyle}>{name}</a>
    </Link>
  );
}

function NestedItem({ href, name, active }: NestedItemProps) {
  const activeStyles = "bg-indigo-50 border-noora-primary-main text-green-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-300 block pl-8 pr-4 py-2 border-l-4 text-base font-medium sm:pr-6 ${
    active ? activeStyles : defaultStyles
  }`;

  return (
    <Link href={href}>
      <a className={navItemStyle} role="menuitem">
        {name}
      </a>
    </Link>
  );
}

type MobileNavItemProps = {
  name: string;
  href: string;
  active: boolean;
  currPath: string;
  dropRoutes?: any;
};

type NestedItemProps = {
  href: string;
  name: string;
  active: boolean;
};

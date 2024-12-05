import React from "react";
import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { getModulesByRole } from "../../data/modules"; // Import getModulesByRole
import { getIdTokenResult } from "firebase/auth";
import { useAuth } from "../../Authenticate"; // Import your custom authentication hook

export default function ModulesInfo({}) {
  // Get accessible modules for the current user role
  const [user, email] = useAuth(); // Use your custom hook to get the current user
  const [userRole, setUserRole] = useState<string>("user");
  const [visibleModules, setVisibleModules] = useState(
    getModulesByRole("user")
  );

  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        const token = await getIdTokenResult(user); // Fetch token
        const role =
          typeof token.claims.role === "string" ? token.claims.role : "user"; // Ensure role is a string
        setUserRole(role); // Set the role
        setVisibleModules(getModulesByRole(role)); // Update modules based on role
      }
    };
    fetchRole();
  }, [user]); // Runs whenever the user changes

  return (
    <div id="modules">
      <div className="pb-4 text-slate-700 flex flex-col gap-y-2">
        <h1 className="inline font-bold text-noora-secondary font-display text-3xl tracking-tight">
          Choose from our <span className="special-underline">modules</span>.
        </h1>
        <p>
          The goal is that after successfully completing these modules, you will{" "}
          <b>respond well during social conversation</b> and will{" "}
          <b>feel more comfortable and confident</b> when they come up in
          everyday situations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 flex-col md:flex-row items-stretch justify-center w-full gap-2">
        {Object.values(visibleModules).map((module) => (
          <div key={module.title} className="group relative">
            <div className="bg-gray-100 trans-150 p-6 rounded-md border-2 h-full border-gray-200 group-hover:border-gray-300">
              <div>
                <span className="rounded-lg inline-flex bg-indigo-50 border-2 border-indigo-100 text-indigo-700 p-0.5">
                  <module.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">
                  <Link href={"/noora?module=" + module.module}>
                    <a className="text-noora-secondary-light">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {module.title}
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-base text-gray-500">{module.desc}</p>
              </div>
              <span
                className="pointer-events-none trans-300 absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

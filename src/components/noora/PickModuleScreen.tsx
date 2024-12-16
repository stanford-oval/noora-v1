import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getIdTokenResult } from "firebase/auth";
import { useAuth } from "../../Authenticate";
import modules, { getModulesByRole } from "../../data/modules";

export default function PickModuleScreen({ open, setOpen }: any) {
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:m-4 sm:max-w-4xl sm:p-6">
                <div>
                  <div className="pb-4 text-slate-700 flex flex-col gap-y-1 md:gap-y-2 text-center">
                    <h1 className="font-bold text-noora-secondary font-display text-2xl md:text-3xl">
                      What do you want to{" "}
                      <span className="text-noora-primary">practice</span>?
                    </h1>
                    <p>
                      To see all modules and their descriptions, visit{" "}
                      <Link href="/dashboard#modules">
                        <a className="text-noora-secondary outline-none font-medium">
                          All Modules
                        </a>
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 grid-cols-2 md:flex-row items-stretch justify-center w-full gap-2">
                    {Object.values(visibleModules).map((module) => (
                      <Link
                        key={module.title}
                        href={"/noora?module=" + module.module}
                        onClick={() => setOpen(false)}
                      >
                        <a className="group relative block">
                          <div className="bg-gray-100 trans-150 p-2 md:p-4 rounded-md border-2 h-full border-gray-200 group-hover:border-gray-300 flex flex-row align-middle justify-between space-x-4">
                            <div className="my-auto text-left">
                              <h3 className="text-md xs:text-lg md:text-xl font-semibold text-noora-secondary-light">
                                {module.title}
                              </h3>
                            </div>
                            <div className="w-fit my-auto">
                              <span className="rounded-lg inline-flex bg-indigo-50 border-2 border-indigo-100 text-indigo-700 p-0.5">
                                <module.icon className="h-5 w-5 md:h-7 md:w-7" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

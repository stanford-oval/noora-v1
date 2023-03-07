import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import modules from "../../data/modules";

export default function PickModuleScreen({ open, setOpen }: any) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { }}>
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
                                <PopupContents setOpen={setOpen} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

function PopupContents(setOpen: any) {
    return (
        <div>
            <div className="pb-4 text-slate-700 flex flex-col gap-y-1 md:gap-y-2 text-center">
                <h1 className="inline font-bold text-noora-secondary font-display text-2xl md:text-3xl tracking-tight">
                    What do you want to{" "}
                    <span className="text-noora-primary">practice</span>?
                </h1>
                <p>
                    To see all modules and their descriptions, visit <Link href="/dashboard#modules"><a className="text-noora-secondary outline-none font-medium">All Modules</a></Link>.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-2 md:flex-row items-stretch justify-center w-full gap-2">
                {Object.values(modules).map((module) => (
                    <div key={module.title} className="group relative" >
                        <div className="bg-gray-100 trans-150 p-2 md:p-4 rounded-md border-2 h-full border-gray-200 group-hover:border-gray-300 flex flex-row align-middle justify-between space-x-4">
                            <div className="my-auto text-left">
                                <h3 className="text-md xs:text-lg md:text-xl font-semibold">
                                    <Link href={"/noora?module=" + module.module} onClick={() => setOpen(false)}>
                                        <a className="text-noora-secondary-light outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {module.title}
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                            <div className="w-fit my-auto">
                                <span className="rounded-lg inline-flex bg-indigo-50 border-2 border-indigo-100 text-indigo-700 p-0.5">
                                    <module.icon className="h-5 w-5 md:h-7 md:w-7" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full">
                <Link href={"/noora?module=" + (modules[Object.keys(modules)[Object.keys(modules).length * Math.random() << 0] as keyof typeof modules]).module}>
                    <button className="rounded-lg py-2 outline-none bg-noora-primary hover:bg-noora-primary-dark text-white mx-auto mt-4 w-full text-lg font-medium flex justify-center">
                        <FontAwesomeIcon icon={faShuffle} className="w-5 h-5 mt-1 mr-2" /> Choose for me
                    </button>
                </Link>
            </div>
        </div >
    )
}

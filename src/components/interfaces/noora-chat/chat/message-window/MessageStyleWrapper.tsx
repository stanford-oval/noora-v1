import React from "react"
import { clsx } from "clsx";

export default function MessageStyleWrapper({ fromNoora, children }: any) {
    return <div
        className={clsx(
            "rounded-xl w-fit px-4 py-3 mt-1.5 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl break-words",
            fromNoora
                ? "bg-gray-200 mr-auto"
                : "bg-noora-primary text-white ml-auto"
        )}
    >
       {children}
    </div>
}
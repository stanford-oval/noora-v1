import clsx from "clsx";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Progress({ convoState }: any) {
  return (
    <div className="mx-auto mt-2 flex flex-row flex-wrap justify-center bg-gray-100 py-1 rounded-lg">
      {[...Array(convoState.value.numProblems).keys()].map((i: number) => {
        const baseStyles =
          "h-10 w-10 rounded-full flex items-center justify-center border-2";
        const wrongStyles = "bg-red-400 text-white border-red-600";
        const correctStyles = "bg-green-400 text-white border-green-600";
        const notDoneStyles =
          "bg-white border-dashed border-gray-400 text-gray-400";

        let addedStyles = notDoneStyles;
        let icon = <span>{i + 1}</span>;
        if (convoState.value.progress.length > i) {
          if (convoState.value.progress[i].goodAnswer) {
            icon = <FontAwesomeIcon icon={faCheck} className="h-6 w-6" />;
            addedStyles = correctStyles;
          } else {
            icon = <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />;
            addedStyles = wrongStyles;
          }
        }

        return (
          <div className="p-1">
            <div className={clsx(baseStyles, addedStyles)}>{icon}</div>
          </div>
        );
      })}
    </div>
  );
}

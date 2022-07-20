import React, { useContext, useRef } from "react";
import generateResult from "../../../scripts/generate-data";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { PlaygroundContext } from "../Playground";

export default function InputForm() {
  const { askNoora } = useContext(PlaygroundContext);
  const { query, results, resultsQueue } = askNoora;
  const inputBox = useRef<HTMLInputElement>(null);

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    let statement = query.value;
    query.setValue("");
    if (inputBox.current) inputBox.current.focus();
    let id = uuidv4();
    results.setValue([...results.value, { id: id, statement: statement }]);

    console.log("Generating result for: " + statement);
    let result = await generateResult(statement, id);
    resultsQueue.setValue([result]);
  };

  return (
    <form className="mt-5 mx-auto max-w-2xl">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none text-slate-400 z-10">
          <FontAwesomeIcon icon={faComment} className="w-4 h-4" />
        </div>

        <input
          autoFocus
          ref={inputBox}
          type="text"
          onChange={(e) => {
            query.setValue(e.target.value);
          }}
          value={query.value}
          placeholder="I finished great book today!"
          className="block p-4 pl-12 w-full border-2 focus:outline-none border-gray-400 shadow-sm focus:border-noora-primary-main sm:text-sm rounded-full text-slate-800"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={query.value.length == 0}
          className="text-white absolute right-2.5 bottom-3 md:bottom-2.5 bg-noora-primary-main hover:bg-noora-primary-dark disabled:bg-noora-primary-dark focus:outline-none font-medium rounded-full text-sm px-4 py-2"
        >
          Go
        </button>
      </div>
    </form>
  );
}

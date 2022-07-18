import React from "react";
import generateResult from "../../../scripts/generate-data";
import { v4 as uuidv4, v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function InputForm({
  query,
  updateQuery,
  results,
  updateResults,
  updateResultsQueue,
}: InputFieldProps) {
  let handleSubmit = async (e: any) => {
    e.preventDefault();
    let statement = query;
    let id = uuidv4();
    updateResults([...results, { id: id, statement: statement }]);
    updateQuery("");

    console.log("Generating result for: " + statement);
    let result = await generateResult(statement, id);
    updateResultsQueue([result]);
  };

  return (
    <form className="mt-5 mx-auto max-w-2xl">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none text-slate-400">
          <FontAwesomeIcon icon={faComment} className="w-4 h-4" />
        </div>

        <input
          type="text"
          onChange={(e) => {
            updateQuery(e.target.value);
          }}
          value={query}
          placeholder="I finished great book today!"
          className="block p-4 pl-12 w-full border-2 focus:outline-none border-gray-400 shadow-sm focus:border-noora-primary-main sm:text-sm rounded-full text-slate-800"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="text-white absolute right-2.5 bottom-3 md:bottom-2.5 bg-noora-primary-main hover:bg-noora-primary-light focus:outline-none font-medium rounded-full text-sm px-4 py-2"
        >
          Go
        </button>
      </div>
    </form>
  );
}

type InputFieldProps = {
  query: string;
  updateQuery: any;
  results: any[];
  updateResults: any;
  updateResultsQueue: any;
};

import React from "react";
import generateResult from "../../../scripts/generate-data";

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
    console.log("We have " + statement);
    updateResults([...results, { statement: statement }]);
    updateQuery("");

    let result = await generateResult(statement);
    console.log("RESULT for " + statement);
    updateResultsQueue([result]);
    console.log("updated result");
  };

  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          updateQuery(e.target.value);
        }}
        value={query}
        className="border-2"
      />
      <button
        type="submit"
        className="border-2"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
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

import React from "react";
import generateResult from "../../../scripts/generate-data";
import { v4 as uuidv4, v4 } from 'uuid';

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
    let id = uuidv4()
    console.log("We have " + statement);
    updateResults([...results, { id: id, statement: statement }]);
    updateQuery("");

    let result = await generateResult(statement, id);
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

import React from "react";
import generateResult from "../../../scripts/noora-replies-playground";

export default function InputForm({
  query,
  updateQuery,
  results,
  updateResults,
}: InputFieldProps) {
  let handleSubmit = (e: any) => {
    e.preventDefault();
    let result = generateResult(query);
    
    updateResults([...results, result]);
    updateQuery("");
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
};

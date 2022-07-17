import React from "react";

export default function InputForm({
  query,
  updateQuery,
  results,
  updateResults,
}: InputFieldProps) {
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
        onClick={(e) => {
          e.preventDefault();
          updateResults([...results, { statement: query }]);
          updateQuery("");
        }}
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

import React, { useEffect, useContext } from "react";
import { PlaygroundContext } from "../Playground";
import InputForm from "./InputForm";
import Result from "./Result";

export default function AskNoora() {
  const { askNoora } = useContext(PlaygroundContext);
  const { results, resultsQueue } = askNoora;

  useEffect(() => {
    // on queue change, update the right element
    resultsQueue.value.forEach((result: any) => {
      const newResults: any[] = results.value.map((r: any) => {
        if (r.id == result.id) return result;
        else return r;
      });

      results.setValue(newResults);
      resultsQueue.setValue([]); // empty queue
    });
  }, [resultsQueue.value]);

  return (
    <div>
      <div
        className="pt-16 bg-cover bg-no-repeat bg-center overflow-hidden"
        id="nooraRepliesHero"
      >
        <div className="pt-12 pb-32">
          <div className="container text-center justify-center">
            <p className="inline leading-tight bg-gradient-to-r from-noora-primary-dark1 via-noora-primary-dark2 to-noora-secondary bg-clip-text font-bold text-5xl tracking-tight text-transparent">
              Ask Noora
            </p>
            <h2 className="mt-3 text-2xl max-w-lg tracking-tight text-slate-800 mx-auto">
              Tell Noora anything, and she will give you some good and bad
              replies.
            </h2>
            <InputForm />
          </div>
        </div>
      </div>
      <div className="container -mt-32 py-6">
        <ul>
          {results.value
            .slice(0)
            .reverse()
            .map((result: any) => (
              <li key={result.id}>
                <Result
                  id={result.id}
                  statement={result.statement}
                  good_replies={result.good_replies}
                  bad_replies={result.bad_replies}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

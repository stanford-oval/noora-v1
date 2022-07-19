import React, { useEffect, useContext } from "react";
import { PlaygroundContext } from "../Playground";
import { useRouter } from "next/router";

export default function Practice() {
  const router = useRouter();

//   useEffect(() => {
//     router.push("/playground?page=practice", undefined, { shallow: true });
//   }, []);

//   const { askNoora } = useContext(PlaygroundContext);
//   const { results, resultsQueue } = askNoora;

  return (
    <div className="pt-16">
      PRACTICE PAGE
    </div>
  );
}

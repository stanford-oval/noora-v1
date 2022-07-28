import React, { useState, useEffect } from "react";
import Page from "../../utility/Page";
import { useRouter } from "next/router";
import modules from "../../../data/modules";
import Preamble from "./Preamble";

export default function Noora() {
  const router = useRouter();

  const [selectedModule, setSelectedModule] = useState(
    modules[
      Object.keys(modules).filter(
        (m) => m == router.query.module
      )[0] as keyof typeof modules
    ]
  );

  useEffect(() => {
    const key: any =
      router.query.module ||
      router.asPath.match(new RegExp(`[&?]module=(.*)(&|$)`));

    if (!key) {
      router.push("/modules/noora?module=all", undefined, {
        shallow: true,
      }); // default if no path
    } else {
      setSelectedModule(modules[key as keyof typeof modules]);
    }
  }, [router.query]);
  return (
    <div>
      <Page
        title={
          selectedModule
            ? `${selectedModule.title} ${
                selectedModule.title == "All" ? "Modules" : "Module"
              }`
            : "Noora"
        }
        desc="Practice social scenarios with Noora. Noora is a conversational AI designed to improve the social skills of individuals with ASD."
      >
        {selectedModule && (
          <div>
            <Preamble module={selectedModule} />
          </div>
        )}
      </Page>
    </div>
  );
}

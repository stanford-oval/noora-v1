import React from "react";
import Playground from "../components/playground/Playground";
import Page from "../components/utility/Page";

export default function playground() {
  return (
    <Page
      title="Playground"
      desc="Experiment with Noora, a conversational AI designed to improve the social skills of individuals with ASD."
    >
      <Playground />
    </Page>
  );
}

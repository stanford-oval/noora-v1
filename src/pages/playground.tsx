import React from "react";
import NooraReplies from "../components/playground/noora-replies/NooraReplies";
import Page from "../components/utility/Page";

export default function index() {
  return (
    <Page
      title="Playground"
      desc="Experiment with Noora, a conversational AI to improve the social skills of individuals with ASD."
    >
      <NooraReplies />
    </Page>
  );
}

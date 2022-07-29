import React from "react";
import CardsGrid from "../components/modules/CardsGrid";
import Hero from "../components/modules/Hero";
import Page from "../components/utility/Page";

export default function index() {
  return (
    <Page
      title="Modules"
      desc="See all the different modules that Noora offers. Noora is a conversational AI designed to improve the social skills of individuals with ASD."
    >
      <Hero />
      <CardsGrid />
    </Page>
  );
}

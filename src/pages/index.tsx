import React from "react";
import Page from "../components/utility/Page";
import Hero from "../components/home/Hero";
import CTA from "../components/home/CTA";
import Features from "../components/home/Features";

export default function index() {
  return (
    <Page
      fullTitle="Noora"
      desc="A platform utilizing conversational AI to improve the social skills of individuals with ASD."
    >
      <Hero />
      {/* <Features />
      <CTA /> */}
    </Page>
  );
}

import React from "react";
import Page from "../components/utility/Page";
import Hero from '../components/home/Hero';

export default function index() {
  return (
    <Page
      fullTitle="Noora"
      desc="A platform utilizing conversational AI to improve the social skills of individuals with ASD."
    >
      <Hero />
      <div className="pt-16 container">
        
        <h1>noora - powered by Genie</h1>
        <h3>Stanford OVAL</h3>
        <b>[TODO]</b>
      </div>
    </Page>
  );
}

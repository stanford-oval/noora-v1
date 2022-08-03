import React from "react";
import UserHero from "../components/dashboard/UserHero";
import ProgressSummary from "../components/dashboard/ProgressSummary";
import Page from "../components/utility/Page";
import ModulesInfo from "../components/dashboard/ModulesInfo";

export default function dashboard() {
  return (
    <Page
      title="Dashboard"
      desc="View your Noora account and progress. Noora is a platform utilizing conversational AI to improve the social skills of individuals with ASD."
    >
      <UserHero />
      <div className="container py-8 flex flex-col gap-8">
        <ProgressSummary />
        <ModulesInfo />
      </div>
    </Page>
  );
}

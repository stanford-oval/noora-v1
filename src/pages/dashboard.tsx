import React from "react";
import UserHero from "../components/dashboard/UserInfo";
import ProgressSummary from "../components/dashboard/ProgressSummary";
import Page from "../components/global/utility/Page";
import ModulesInfo from "../components/dashboard/ModulesInfo";
import { LogInScreen, BufferScreen } from '../SignIn';
import { useAuth } from '../Authenticate'; // Import the useAuth function

export default function dashboard() {
  const [user, email] = useAuth(); // Call the useAuth function to get the user state

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return (
      <BufferScreen/>
    );
  }

  return (
    <Page
      title="Dashboard"
      desc="View your Noora account and progress. Noora is a platform utilizing conversational AI to improve the social conversation of individuals with ASD."
    >
      { user ? (<div>
        <UserHero />
        <div className="container py-8 flex flex-col gap-8">
          <ProgressSummary />
          <ModulesInfo />
        </div>
      </div>) : <LogInScreen/>}
    </Page>
  );
}

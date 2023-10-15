import React from "react";
import Page from "../components/global/utility/Page";
import { UserCreationScreen } from '../SignIn';

function CreateAccount() {
  return (
    <Page
      title="Create Account"
      desc="Create an account to Noora."
    >
      { 
      <UserCreationScreen/>
      }
    </Page>
  );
}

export default CreateAccount;

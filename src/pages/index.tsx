import React, { useState, useEffect } from "react";
import Page from "../components/global/utility/Page";
import Hero from "../components/home/Hero";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { LogInScreen, BufferScreen } from '../SignIn';
import { useAuth } from '../Authenticate'; // Import the useAuth function

export default function Index() {
  const [user, email] = useAuth(); // Call the useAuth function to get the user state

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return (
      <BufferScreen/>
    );
  }

  return (
    <Page
      fullTitle="Noora"
      desc="A platform utilizing conversational AI to improve the social conversation of individuals with ASD."
    >
      {user ? <Hero /> : <LogInScreen />}
    </Page>
  );
}
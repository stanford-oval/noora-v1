import React from "react";
import AskNoora from "../components/ask-noora/AskNoora";
import Page from "../components/global/utility/Page";
import { LogInScreen, BufferScreen } from '../SignIn';
import { useAuth } from '../Authenticate'; // Import the useAuth function

export default function asknoora() {
    const [user, email] = useAuth(); // Call the useAuth function to get the user state

    // Display a loading indicator while checking the authentication status
    if (user === null) {
      return (
        <BufferScreen/>
      );
    }

    return (
        <Page
            title="Ask Noora"
            desc="How would Noora reply? Noora is a conversational AI to improve the social conversation of individuals with ASD."
        >
            {user ? <AskNoora /> : <LogInScreen/>}
        </Page>
    );
}

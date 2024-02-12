import React, { useState, useEffect } from "react";
import Page from "../components/global/utility/Page";
import { LogInScreen, BufferScreen } from '../SignIn';
import Noora from "../components/noora/Noora";
import ModuleChat from "../components/noora/ModuleChat";
import modules from "../data/modules";
import { useAuth } from '../Authenticate'; // Import the useAuth function


function Research() {
  const [selectedModule, setSelectedModule] = useState(modules["general"]);
  const [user, email] = useAuth(); // Call the useAuth function to get the user state

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return (
      <BufferScreen/>
    );
  }

  return (
    user ? (
      <ModuleChat
        focusedMode={true}
        modules={
          selectedModule.module === "all"
            ? Object.values(modules).map((m: any) => {
                if (m.module === "all") return;
                return { title: m.module, displayName: m.title, active: true, fixed: true };
              })
            : Object.values(modules).map((m: any) => {
                if (m.module === "all") return;
                return {
                  title: m.module,
                  displayName: m.title,
                  active: selectedModule.module === m.module,
                  fixed: true,
                };
              })
        }
      />
    ) : (
      <LogInScreen />
    )
  );
}

export default Research;

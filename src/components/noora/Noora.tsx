import React, { useState, useEffect } from "react";
import Page from "../global/utility/Page";
import { useRouter } from "next/router";
import modules from "../../data/modules";
import Preamble from "./Preamble";
import ModuleChat from "./ModuleChat";
import PickModuleScreen from "./PickModuleScreen";
import { LogInScreen, BufferScreen } from '../../SignIn';
import { useAuth } from '../../Authenticate'; // Import the useAuth function

export default function Noora() {
  const router = useRouter();

  const [selectedModule, setSelectedModule] = useState(modules["general"]);
  const [showPickModuleScreen, setShowPickModuleScreen] = useState(false);

  useEffect(() => {
    const key: any =
      router.query.module ||
      router.asPath.match(new RegExp(`[&?]module=(.*)(&|$)`));

    if (!key) {
      setShowPickModuleScreen(true);
    } else {
      setShowPickModuleScreen(false);
      setSelectedModule(modules[key as keyof typeof modules]);
    }
  }, [router.query, showPickModuleScreen]);

  let focus = false;

  const [user, email] = useAuth(); // Call the useAuth function to get the user state

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return (
      <BufferScreen />
    );
  }

  return (
    <div>
      <Page
        title={
          selectedModule
            ? `${selectedModule.title} Module`
            : "Noora"
        }
        desc="Practice social scenarios with Noora. Noora is a conversational AI designed to improve the social conversation of individuals with ASD."
      >
        {user ? (<div>
          {showPickModuleScreen && <PickModuleScreen open={showPickModuleScreen} setOpen={setShowPickModuleScreen} />}
          {selectedModule ? (
            <div>
              <Preamble module={selectedModule} focusedMode={focus} />
              <ModuleChat
                focusedMode={focus}
                modules={selectedModule.module == "all"
                  ? Object.values(modules).map((m: any) => {
                    if (m.module == "all") return;
                    return { title: m.module, displayName: m.title, active: true, fixed: true };
                  })
                  : Object.values(modules).map((m: any) => {
                    if (m.module == "all") return;
                    return {
                      title: m.module,
                      displayName: m.title,
                      active: selectedModule.module == m.module,
                      fixed: true,
                    };
                  })
                }
              />
            </div>
          ) : (
            <div className="h-screen"></div>
          )}
        </div>) : <LogInScreen />}
      </Page>
    </div>
  );
}
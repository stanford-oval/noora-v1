import React, { useState, useEffect } from "react";
import Page from "../global/utility/Page";
import { useRouter } from "next/router";
import modules, { getModulesByRole } from "../../data/modules"; // Import getModulesByRole
import Preamble from "./Preamble";
import ModuleChat from "./ModuleChat";
import PickModuleScreen from "./PickModuleScreen";
import { LogInScreen, BufferScreen } from "../../SignIn";
import { useAuth } from "../../Authenticate"; // Import the useAuth function

export default function Noora() {
  const router = useRouter();

  const [selectedModule, setSelectedModule] = useState(modules["general"]);
  const [showPickModuleScreen, setShowPickModuleScreen] = useState(false);
  const [redirectHandled, setRedirectHandled] = useState(false); // Prevent multiple redirects

  const [user, email] = useAuth(); // Call the useAuth function to get the user state
  const [userRole, setUserRole] = useState<string>(""); // Track the user's role

  // Fetch user role when user is available
  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        const token = await user.getIdTokenResult();
        const role = token.claims.role || "user"; // Default to "user"
        setUserRole(role);
      }
    };

    fetchRole();
  }, [user]);

  // Main logic to check module access
  useEffect(() => {
    // Wait for router and role readiness
    if (!router.isReady || !userRole || redirectHandled) return;

    const key: any =
      router.query.module ||
      router.asPath.match(new RegExp(`[&?]module=(.*)(&|$)`));

    if (!key) {
      setShowPickModuleScreen(true); // Show module picker if no module is in URL
      return;
    }

    const accessibleModules = getModulesByRole(userRole); // Get modules allowed for this role
    console.log("Accessible Modules:", accessibleModules);
    console.log("User Role:", userRole);
    console.log("Module Key:", key);

    if (!accessibleModules[key]) {
      // Redirect unauthorized users to the general module
      setRedirectHandled(true); // Prevent multiple redirects
      router.replace("/noora?module=general");
    } else {
      setShowPickModuleScreen(false);
      setSelectedModule(modules[key as keyof typeof modules]);
    }
  }, [router.isReady, router.query.module, userRole, redirectHandled]); // Trigger when these dependencies are ready

  let focus = false;

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return <BufferScreen />;
  }

  return (
    <div>
      <Page
        title={selectedModule ? `${selectedModule.title} Module` : "Noora"}
        desc="Practice social scenarios with Noora. Noora is a conversational AI designed to improve the social conversation of individuals with ASD."
      >
        {user ? (
          <div>
            {showPickModuleScreen && (
              <PickModuleScreen
                open={showPickModuleScreen}
                setOpen={setShowPickModuleScreen}
              />
            )}
            {selectedModule ? (
              <div>
                <Preamble module={selectedModule} focusedMode={focus} />
                <ModuleChat
                  focusedMode={focus}
                  modules={
                    selectedModule.module === "all"
                      ? Object.values(modules).map((m: any) => {
                          if (m.module === "all") return;
                          return {
                            title: m.module,
                            displayName: m.title,
                            active: true,
                            fixed: true,
                          };
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
              </div>
            ) : (
              <div className="h-screen"></div>
            )}
          </div>
        ) : (
          <LogInScreen />
        )}
      </Page>
    </div>
  );
}

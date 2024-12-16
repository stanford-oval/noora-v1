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

  const firstModuleKey = Object.keys(modules)[0] as keyof typeof modules;
  const [selectedModule, setSelectedModule] = useState(modules[firstModuleKey]);
  const [showPickModuleScreen, setShowPickModuleScreen] = useState(false);
  const [redirectHandled, setRedirectHandled] = useState(false); // Prevent multiple redirects

  const [user, email] = useAuth(); // Call the useAuth function to get the user state
  const [userRole, setUserRole] = useState<string>(""); // Track the user's role

  // Fetch user role when user is available
  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        const token = await (user as any).getIdTokenResult(); // Simple cast to bypass type issue
        const role = token.claims.role || "user";
        setUserRole(role);
      }
    };

    fetchRole();
  }, [user]);

  // Main logic to check module access
  useEffect(() => {
    const checkModuleAccess = async () => {
      if (!router.isReady || !userRole || redirectHandled) return;

      const key: string | undefined =
        (router.query.module as string) ||
        router.asPath.match(new RegExp(`[&?]module=(.*)(&|$)`))?.[1];

      if (!key) {
        setShowPickModuleScreen(true); // Show module picker if no module is in URL
        return;
      }

      const accessibleModules = getModulesByRole(userRole); // Get modules allowed for this role
      console.log("Accessible Modules:", accessibleModules);
      console.log("User Role:", userRole);
      console.log("Module Key:", key);

      // Ensure the key is valid and matches one of the module keys
      if (!(key in accessibleModules)) {
        // Redirect unauthorized users to module selection
        setRedirectHandled(true); // Prevent multiple redirects
        router.replace("/noora");
      } else {
        setShowPickModuleScreen(false);
        setSelectedModule(modules[key as keyof typeof modules]); // Type assertion ensures TypeScript accepts the key
      }
    };

    checkModuleAccess();
  }, [router.isReady, router.query.module, userRole, redirectHandled]);

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

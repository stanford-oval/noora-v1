import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router
import Page from "../components/global/utility/Page";
import { LogInScreen, BufferScreen } from "../SignIn";
import Noora from "../components/noora/Noora";
import ModuleChat from "../components/noora/ModuleChat";
import modules from "../data/modules";
import { useAuth } from "../Authenticate"; // Import the useAuth function

function Research() {
  const router = useRouter(); // Initialize useRouter
  const [user, email] = useAuth(); // Call the useAuth function

  useEffect(() => {
    // Redirect to /noora?module=general if user is authenticated
    if (user) {
      router.push("/noora");
    }
  }, [user, router]);

  // Display a loading indicator while checking the authentication status
  if (user === null) {
    return <BufferScreen />;
  }

  return <LogInScreen />;
}

export default Research;

// old RESEARCH page
// import React, { useState, useEffect } from "react";
// import Page from "../components/global/utility/Page";
// import { LogInScreen, BufferScreen } from '../SignIn';
// import Noora from "../components/noora/Noora";
// import ModuleChat from "../components/noora/ModuleChat";
// import modules from "../data/modules";
// import { useAuth } from '../Authenticate'; // Import the useAuth function

// function Research() {
//   const [selectedModule, setSelectedModule] = useState(modules["general"]);
//   const [user, email] = useAuth(); // Call the useAuth function to get the user state

//   // Display a loading indicator while checking the authentication status
//   if (user === null) {
//     return (
//       <BufferScreen/>
//     );
//   }

//   return (
//     user ? (
//       <ModuleChat
//         focusedMode={true}
//         modules={
//           selectedModule.module === "all"
//             ? Object.values(modules).map((m: any) => {
//                 if (m.module === "all") return;
//                 return { title: m.module, displayName: m.title, active: true, fixed: true };
//               })
//             : Object.values(modules).map((m: any) => {
//                 if (m.module === "all") return;
//                 return {
//                   title: m.module,
//                   displayName: m.title,
//                   active: selectedModule.module === m.module,
//                   fixed: true,
//                 };
//               })
//         }
//       />
//     ) : (
//       <LogInScreen />
//     )
//   );
// }

// export default Research;

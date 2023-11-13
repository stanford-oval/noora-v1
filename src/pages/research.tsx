import React, { useState, useEffect } from "react";
import Page from "../components/global/utility/Page";
import { UserCreationScreen } from '../SignIn';
import Noora from "../components/noora/Noora";
import ModuleChat from "../components/noora/ModuleChat";
import modules from "../data/modules";


function Research() {
  const [selectedModule, setSelectedModule] = useState(modules["general"]);
  return (
      <ModuleChat
      focusedMode = {true}
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
  );
}

export default Research;

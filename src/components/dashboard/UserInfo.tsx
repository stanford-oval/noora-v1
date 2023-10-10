import React from "react";
import { clearProgress } from "../../scripts/user-info/local-storage-utils";
import { useAuth } from '../../Authenticate'; // Import the useAuth function

export default function UserHero() {
  const [user, email] = useAuth();


  return (
    <div className="pt-16 bg-gray-100">
      <div className="py-6 md:py-8 container">
        <div className="flex flex-col md:flex-row md:text-left md:justify-start text-center gap-x-6 gap-y-2 justify-center items-center">
          <img
            src="/img/dashboard/default_pfp.png"
            alt="Default Picture"
            className="h-28 w-28 rounded-full bg-gray-400"
          />
          <div>
            <h1 className="font-bold text-noora-secondary text-3xl">{email && String(email).split("@")[0]}</h1>
            <p className="text-slate-700">Welcome back to Noora.</p>
            {/* <button className="py-2 px-4 mt-2 rounded-full text-xs bg-noora-secondary-light text-white hover:bg-noora-secondary" onClick={() => {clearProgress(); window.location.replace(location.pathname);}}>Reset progress</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

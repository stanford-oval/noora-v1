import React from "react";

export default function Header() {
  return (
    <div className="w-full bg-white p-2 pt-3 border-2 border-gray-400 rounded-t-md">
      <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-noora-primary-light via-noora-primary-dark to-noora-primary-dark2"></div>
      <div className="text-2xl text-center font-bold text-noora-secondary">
        Noora
      </div>
    </div>
  );
}

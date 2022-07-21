import React from "react";

export default function Summary({ convoState }: any) {
  return (
    <div className="min-h-full rounded-lg overflow-y-scroll pretty-scroll border-2 bg-white border-gray-400">
      Summary
      <div id="chat-window"></div>
    </div>
  );
}

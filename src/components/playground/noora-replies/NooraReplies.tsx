import React, { useState } from "react";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  return (
    <div>
      <div>
        <h1>Noora</h1>
        <h2>
          Tell Noora anything, and she will give you some good and bad replies.
        </h2>
        <input
          type="text"
          onChange={(e) => {
            updateQuery(e.target.value);
          }}
        />
        <p>Your query: {query}</p>
      </div>
    </div>
  );
}

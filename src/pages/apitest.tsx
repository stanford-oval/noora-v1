import React, { useState } from "react";

export default function apitest() {
  const [response, setResponse] = useState<Record<string, unknown> | null>(
    null
  );

  const makeRequest = async () => {
    const res = await fetch("/api/hello");

    setResponse({
      status: res.status,
      body: await res.json(),
      limit: res.headers.get("X-RateLimit-Limit"),
      remaining: res.headers.get("X-RateLimit-Remaining"),
    });
  };

  return (
    <main>
      <button className="button bg-red-500 text-white" onClick={() => makeRequest()}>
        Make Request
      </button>
      {response && (
        <code>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </code>
      )}
    </main>
  );
}

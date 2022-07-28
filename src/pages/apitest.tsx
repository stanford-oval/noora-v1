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
      <h1>Next.js API Routes Rate Limiting</h1>
      <p>
        This example uses <code>lru-cache</code>{" "}
        to implement a simple rate limiter for API routes (Serverless
        Functions).
      </p>
      <button onClick={() => makeRequest()}>Make Request</button>
      {response && (
        <code>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </code>
      )}
    </main>
  );
}

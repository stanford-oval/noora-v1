import React, { useState } from "react";

export default function RateLimitingTest() {
  const [response, setResponse] = useState<Record<string, unknown> | null>(
    null
  );

  const makeRequest = async () => {
    const res = await fetch("/api/openai", {
      method: "POST",
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt: "Give me a name for a dog.",
      temperature: 0.9,
        max_tokens: 5,
        frequency_penalty: 0.2,
        presence_penalty: 0.3,
      }),
    });

    setResponse({
      status: res.status,
      body: await res.json(),
      limit: res.headers.get("X-RateLimit-Limit"),
      remaining: res.headers.get("X-RateLimit-Remaining"),
    });
  };

  return (
    <main>
      <button
        className="button bg-red-500 text-white"
        onClick={() => makeRequest()}
      >
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

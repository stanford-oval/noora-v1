export default async function Completion(parameters: CompletionParameters) {
  const requestBody = convertPromptToChat(parameters);

  let reply = await fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify(requestBody.messages),
  }).then((res) => res.json());

  if (reply) reply = reply.text;

  return reply;
}

function convertPromptToChat(parameters: CompletionParameters) {
  return {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: parameters.prompt,
      },
    ],
    temperature: parameters.temperature,
    max_tokens: parameters.max_tokens,
    frequency_penalty: parameters.frequency_penalty,
    presence_penalty: parameters.presence_penalty,
    stop: parameters.stop,
  };
}

type CompletionParameters = {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
  frequency_penalty: number;
  presence_penalty: number;
  stop?: string;
};

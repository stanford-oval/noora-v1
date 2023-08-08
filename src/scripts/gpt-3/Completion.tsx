export default async function Completion(parameters: CompletionParameters) {
  const requestBody = convertPromptToChat(parameters);
  console.log("In completion, prompt:")
  console.log(parameters.prompt);

  let reply = await fetch("/api/openai", {
    method: "POST",
    body: JSON.stringify(requestBody),
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
        content: "You are a strict but helpful social skills coach that provides feedback on whether my replies are appropriate given what you said. Responses that make no sense, are too short, or are non-sequiturs should be immediately rejected as Bad replies. Provide two to three lines of personalized feedback to help improve the responses. Be as strict as possible. Note typos and grammar mistakes, but do not penalize for them -- if the intent is clear and positive, it should be counted as correct.",
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

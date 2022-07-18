import { Configuration, OpenAIApi } from "openai";

export default async function Completion(
  model: string,
  prompt: string,
  temperature: number,
  max_tokens: number,
  frequency_penalty: number,
  presence_penalty: number
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: model,
    prompt: prompt,
    temperature: temperature,
    max_tokens: max_tokens,
    frequency_penalty: frequency_penalty,
    presence_penalty: presence_penalty,
  });

  if (response && response.data && response.data.choices)
    return response.data.choices[0].text;
  else return "";
}

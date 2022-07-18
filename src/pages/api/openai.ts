import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

type Data = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("here");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log(configuration);

  const openai = new OpenAIApi(configuration);
  //   const response = await openai.createCompletion({
  //     model: model,
  //     prompt: prompt,
  //     temperature: temperature,
  //     max_tokens: max_tokens,
  //     frequency_penalty: frequency_penalty,
  //     presence_penalty: presence_penalty,
  //   });

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Write a tagline for an ice cream shop.",
    temperature: 0.95,
    max_tokens: 200,
    frequency_penalty: 0.5,
    presence_penalty: 0.25,
  });

  console.log(response);
  let text = "";
  if (
    response &&
    response.data &&
    response.data.choices &&
    response.data.choices[0].text
  )
    text = response.data.choices[0].text;
  res.status(200).json({ text: text });
}

import type { NextApiRequest, NextApiResponse } from "next";
// import { Configuration, OpenAIApi } from "openai";
import rateLimit from "../../scripts/utils/rate-limit";
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");


const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req);
  console.log("In api/openai handler...");

  // try {
    await limiter.check(res, 20, "CACHE_TOKEN"); // 20 requests per minute
    // const configuration = new Configuration({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });


    const client = new OpenAIClient(
      process.env.AZURE_ENDPOINT, 
      new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY)
    );
    

    const { id, created, choices, usage } = await client.getChatCompletions("gpt4-8k-playground", req.body);

    // const openai = new OpenAIApi(configuration);

    // const response = await openai.createChatCompletion(req.body);

    let text = "";
    // let logprobs = {};

    console.log(`OPENAI: ${choices}`)

    if (choices && choices[0].message) {
      text = choices[0].message.content;
    }

    res.status(200).json({ text: text }); //, logprobs: logprobs });
  // } 
  
  // catch {
  //   res.status(429).json({ error: "Rate limit exceeded" });
  // }
}


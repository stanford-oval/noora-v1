// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "../../scripts/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // HANDLER FOR TESTING/EXPERIMENTATION
  try {
    await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute
    console.log(req.body);
    res.status(200).json({ name: "John Doe", x: req.query });
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}

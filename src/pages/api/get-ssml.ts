import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "../../scripts/rate-limit";
import fs, { readFileSync } from "fs";

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const ssml = xmlToString("./src/data/ssml.xml");

    try {
        await limiter.check(res, 40, "CACHE_TOKEN"); // 40 requests per minute
        res.status(200).json({ text: ssml });
    } catch {
        res.status(429).json({ error: "Rate limit exceeded" });
    }
}

function xmlToString(filePath: string) {
    const xml = readFileSync(filePath, "utf8");
    return xml;
}
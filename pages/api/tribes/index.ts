import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";

type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const articles = JSON.parse(fs.readFileSync("public/tribe.json", "utf8"));
  res.status(200).json(articles);
}
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const id = req.query.id;
    if (req.method === "GET") {
      await delay(1000);
      const titles = fs.readFileSync("public/MHTitle.json", "utf8");
      const title = JSON.parse(titles).articles.find(
        (a: any) => a.id === id
      );
      if (!title) {
        res.status(404).end();
      }
  
      res.status(200).json(title);
    }
}
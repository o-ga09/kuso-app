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
      const tribes = fs.readFileSync("public/tribe.json", "utf8");
      const tribe = JSON.parse(tribes).articles.find(
        (a: any) => a.id === id
      );
      if (!tribe) {
        res.status(404).end();
      }
  
      res.status(200).json(tribe);
    }
}
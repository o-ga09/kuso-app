import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import { Monster } from '../../../app/lib/const';

type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const queryParamArrray = Object.values(req.query);
  const monsters = JSON.parse(fs.readFileSync("public/Monsters.json", "utf8"));
  const filterdMonsters = monsters["monsters"].filter((monster:any) => {
    return queryParamArrray.some((title) => monster[title as keyof Monster] !== 0);
  });
  res.status(200).json(filterdMonsters);
}
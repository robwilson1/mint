import * as fs from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";

let data: Mint.Data = require("data/data.json");

async function saveData(newData: Mint.Data) {
  data = newData;
  await fs.writeFile("data/data.json", JSON.stringify(newData, null, 4));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    return saveData(req.body as Mint.Data)
      .then(() => res.status(200).json(req.body))
      .catch((error) => res.status(500).json({ error }));
  }
}

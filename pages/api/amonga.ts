import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, phone } = JSON.parse(req.body);

  addDoc(collection(db, "/interested"), { name: name, phone: phone });

  res.status(200).send("amonga");
}

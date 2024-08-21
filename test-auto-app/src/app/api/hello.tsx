import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";
import { NextApiRequest, NextApiResponse } from "next";

export const runtime = 'nodejs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const doc = await addDoc(collection(firestore, "test"), {
      text: "hello2"
    }); 
    console.log("succeded");
    res.status(200).json({ message: 'Task executed' });
  } catch (error) {
    console.log(error);
  }
}
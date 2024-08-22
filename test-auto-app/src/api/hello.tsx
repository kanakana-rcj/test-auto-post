import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// export const runtime = 'nodejs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const doc = await addDoc(collection(firestore, "test"), {
      text: "hello2"
    }); 
    console.log("succeded");
    res.status(200).json({
      message: 'hello2',
      cookies: req.cookies,
    })
  } catch (error: any) {
    console.log(error);
    res.status(200).json({
      message: 'hello2',
      cookies: req.cookies,
    })
  }
}
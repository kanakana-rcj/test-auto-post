import { VercelResponse } from "@vercel/node";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";

export default async function () {
  try {
    const doc = await addDoc(collection(firestore, "test"), {
      text: "hello2"
    }); 
  } catch (error) {
    console.log(error);
  }
}

export const runtime = 'nodejs';
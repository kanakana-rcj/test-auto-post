import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";

export const runtime = 'nodejs';

export default async function () {
  try {
    const doc = await addDoc(collection(firestore, "test"), {
      text: "hello2"
    }); 
  } catch (error) {
    console.log(error);
  }
}
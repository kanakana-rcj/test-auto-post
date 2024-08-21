import { VercelResponse } from "@vercel/node";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";

export default async function () {
  try {
    const newCityRef = doc(collection(firestore, "test"));  
    const data = {text: "hello2"};
    await setDoc(newCityRef, data);
    const data2 = {text: "hello3"};
    await addDoc(collection(firestore, "test"), data2);
  } catch (error) {
    console.log(error);
  }
}

export const runtime = 'nodejs';
import { VercelResponse } from "@vercel/node";
import { addDoc, setDoc, doc, collection } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useEffect } from "react";

export default function ( res: VercelResponse ) {
  res.send(`Hello!`);
  useEffect(() => {

    const addingDoc = async () => {
      const newCityRef = doc(collection(firestore, "test"));  
      const data = {text: "hello2"};
      await setDoc(newCityRef, data);
      const data2 = {text: "hello3"};
      await addDoc(collection(firestore, "test"), data2);
    };

    addingDoc();
  }, []);

}

export const runtime = 'nodejs';
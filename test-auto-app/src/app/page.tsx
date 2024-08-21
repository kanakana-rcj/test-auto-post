'use client'

import { useState, FormEvent } from "react";
import { addDoc, collection, } from "firebase/firestore";
import { firestore } from "@/firebase";

export default function RequestForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const doc = await addDoc(collection(firestore, "test"), {
        text: "hello"
      });      
      setIsLoading(false);
      window.alert("送信しました");
      console.log("succeeded not auto");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <button type="submit" disabled={isLoading}>
          {(isLoading ? "送信中..." : "送信")}
        </button>
      </form>
    </>
  );
}

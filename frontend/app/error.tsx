"use client";

import Image from "next/image";
import React from "react";
import UndrawError from '@/assets/undraw/undraw_error.svg'
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: any) {
  const router = useRouter()
  React.useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1 className='text-4xl font-thin'>
        Coś poszło nie tak...
      </h1>
      <h2 className='font-thin '>
        Spróbuj później
      </h2>
      <Image
        loading="lazy"
        width={500}
        height={500}
        className="w-96 h-96"
        src={UndrawError}
        alt=""
      />
      <div className='w-96'>
        <button onClick={() => router.back()} className='button-bg'>
          Wróć do poprzedniej strony
        </button>
      </div>
    </main>
  )
}

import React from "react";
import Image from "next/image";

export default function ContentHome() {
  return (
    <div className="flex h-screen max-h-[700px]">
      <div className="w-1/2 flex flex-col justify-center px-10">
        <h2 className="text-5xl">
          Hi I <a href=""></a>m Astawa Putra
        </h2>
        <h3 className="font-bold bg-orange-400 text-center py-2">Student</h3>
        <p>
          My name is I Wayan Astawa Putra, I study at SMKN 1 Denpasar majoring in RPL (Software Engineering). I am a sociable, disciplined, honest person. I have good skills in the field of computers (software and hardware).
        </p>
        <button className="rounded-full bg-yellow-300 text-white font-bold w-40 hover:shadow-lg">
          <a href="https://portfolioo-sooty-eta.vercel.app/about">MORE ABOUT ME</a>
        </button>
      </div>
      <div className="relative w-1/2">
        <Image src={"/images/pp.jpg"} fill alt="" />
      </div>
    </div>
  );
}

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nihil
          blanditiis necessitatibus. Ab voluptatum doloremque iste similique hic
          fuga beatae ex quaerat veniam modi consequatur ducimus facilis,
          eveniet soluta impedit?
        </p>
        <button className="rounded-full bg-yellow-300 text-white font-bold w-40 hover:shadow-lg">
          <a href="http://localhost:3000/about/">MORE ABOUT ME</a>
        </button>
      </div>
      <div className="relative w-1/2">
        <Image src={"/images/pp.jpg"} fill alt="" />
      </div>
    </div>
  );
}

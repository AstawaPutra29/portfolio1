import Image from "next/image";
import React from "react";

export default function ContentProject() {
  const projects = [
    {
      key: 1,
      image: "/images/fth.png",
      description:
        "ini adalah project web saya yang pertama yaitu membuat website e-commerce dengan menggunakan HTML dan CSS",
    },
  ];
  return (
    <div className="flex flex-col">
      <h2 className="text-center font-bold text-2xl border border-black py-4">
        PROJECT
      </h2>
      <div className="grid grid-cols-1 gap-4 justify-items-center text-center pt-4">
        {projects.map((project) => (
          <div key={project.key} className="border border-black border-1">
            <div className="relative aspect-video">
              <Image src={project.image} alt="" fill />
            </div>
            <p className="px-10 border bg-yellow-200 py-5">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

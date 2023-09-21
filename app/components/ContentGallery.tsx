import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function ContentGallery() {
  const galleries = [
    {
      key: 1,
      gambar: "/images/arsene.jpg",
      description: "digital draw Arsene",
    },
    {
      key: 2,
      gambar: "/images/goro.jpg",
      description: "digital draw goro",
    },
    {
      key: 3,
      gambar: "/images/chainsaw.jpg",
      description: "traditional draw chainsawman",
    },
    {
      key: 4,
      gambar: "/images/kingslayer.jpg",
      description: "digital draw",
    },
  ];
  return (
    <div>
      <h2 className="text-center border border-black border-1 px-96 py-3 text-2xl font-bold">
        GALLERY
      </h2>
      <div className="flex flex-col items-center p-4 gap-4">
        {galleries.map((galeri, index) => (
          <div key={galeri.key} className="overflow-hidden">
            <Image
              src={galeri.gambar}
              alt={`Image ${index}`}
              width={500}
              height={500}
            />
            <p className="text-center">{galeri.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

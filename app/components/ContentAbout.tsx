import React from "react";
import Image from "next/image";
export default function ContentAbout() {
  const gambars = [
    {
      key: "smkn",
      image: "/images/smkn.jpg",
      nama: "SMKN 1 Denpasar",
      alamat:
        "Jl. Cokroaminoto No.84, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
    {
      key: "smp",
      image: "/images/smp.jpg",
      nama: "SMP PGRI 5 Denpasar",
      alamat:
        "Gg. Indus No.8, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
    {
      key: "sd",
      image: "/images/sd.jpg",
      nama: "SDN 18 Pemecutan",
      alamat:
        "Jl. Merthayasa No.1, Pemecutan Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali",
    },
  ];

  return (
    <div>
      <h2 className="text-center border border-black border-1 px-96 py-3 text-2xl font-bold">
        ABOUT
      </h2>
      <p className="text-center my-5 text-lg">
        Nama saya I Wayan Astawa Putra, biasa dipanggil Astawa. Saya berasal
        dari Karangasem, dan tinggal di Jalan Pratu Made Rambug Gang Kamboja No.
        10 .Saya lahir di Denpasar, 29 Agustus 2006. Hobi saya yaitu menggambar.
      </p>
      <h2 className="text-center border border-black border-1 px-96 py-3 text-2xl font-bold">
        PENDIDIKAN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-items-center text-center pt-4">
        {gambars.map((gambar) => (
          <div className="border border-black md:col-span-4 border-1">
            <div className="relative aspect-square">
              <Image src={gambar.image} alt="" fill />
            </div>
            <p>{gambar.nama}</p>
            <p>{gambar.alamat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

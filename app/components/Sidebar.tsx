import React from "react";

export default function Sidebar() {
  const sides = [
    {
      label: "Home",
      url: "http://localhost:3000/",
    },
    {
      label: "About",
      url: "http://localhost:3000/about/",
    },
    {
      label: "Gallery",
      url: "http://localhost:3000/gallery/",
    },
    {
      label: "Project",
      url: "http://localhost:3000/project/",
    },
    {
      label: "Contact",
      url: "http://localhost:3000/contact/",
    },
  ];
  return (
    <div className="bg-yellow-400 text-white h-screen w-[70px] md:w-[200px] fixed top-0 left-0 p-4 shadow-lg">
      <ul className="flex flex-col justify-center items-center">
        {sides.map((side) => (
          <li className="py-10">
            <a href={side.url}>{side.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar";
import ContentAbout from "../components/ContentAbout";

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-[70px] md:ml-[200px] bg-white p-5 flex justify-center items-center">
        <ContentAbout />
      </main>
    </div>
  );
}

import React from "react";
import Sidebar from "../components/Sidebar";
import ContentAbout from "../components/ContentAbout";
import ContentContact from "../components/ContentContact";

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-[70px] md:ml-[200px] p-10 flex justify-center items-center bg-yellow-100">
        <ContentContact />
      </main>
    </div>
  );
}

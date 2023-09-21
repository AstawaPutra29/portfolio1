import React from "react";
import Sidebar from "../components/Sidebar";
import ContentProject from "../components/ContentProject";

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[70px] md:ml-[200px] flex justify-center items-center p-10">
        <ContentProject />
      </div>
    </div>
  );
}

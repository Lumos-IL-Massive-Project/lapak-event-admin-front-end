import React from "react";
import SideBar from "../../../components/SideBar";

function Admin() {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="w-full">
          <h1 className="text-black underline">Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Admin;

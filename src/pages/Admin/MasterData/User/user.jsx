import React from "react";
import SideBar from "../../../../components/SideBar";

const User = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <h1 className="text-white">User</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
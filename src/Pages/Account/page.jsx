import React from "react";
import SideBar from "@/Components/Account/SideBar";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[40px] flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;

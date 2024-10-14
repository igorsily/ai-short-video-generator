"use client";

import React from "react";
import MenuOptions from "@/app/dashboard/_components/menu-options";

const Sidebar = () => {
  return (
    <div
      className="hidden md:block h-screen bg-white fixed mt-[75px] w-64
    shadow-md p-5"
    >
      <div className="grid gap-3">
        <MenuOptions />
      </div>
    </div>
  );
};

export default Sidebar;

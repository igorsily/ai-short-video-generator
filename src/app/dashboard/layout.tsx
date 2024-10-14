"use client";

import React from "react";
import Header from "@/app/dashboard/_components/header";
import Sidebar from "@/app/dashboard/_components/sidebar";
import { VideosProvider } from "@/_context/videos-context";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <VideosProvider>
      <div>
        <Sidebar />
        <div>
          <Header />
          <div className="md:ml-64 p-10">{children}</div>
        </div>
      </div>
    </VideosProvider>
  );
};

export default DashboardLayout;

import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8   " >
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

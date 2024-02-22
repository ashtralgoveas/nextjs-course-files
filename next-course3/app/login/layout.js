"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

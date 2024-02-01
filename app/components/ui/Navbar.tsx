"use client";
import { Avatar } from "@material-tailwind/react";
import React from "react";
import MobileSidebar from "./MobileSidebar";

// eslint-disable-next-line @next/next/no-async-client-component
const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        {/* <UserButton afterSignOutUrl="/" /> */}
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;

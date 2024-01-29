"use client"
import { Avatar } from "@material-tailwind/react";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const Navbar = async () => {

  return (
    <div className="flex items-center px-4 ">
    {/* <span className="lg:hidden">  <MobileSidebar  /></span> */}
      <div className="flex w-full justify-end">
        {/* <UserButton afterSignOutUrl="/" /> */}
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
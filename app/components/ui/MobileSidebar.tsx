"use client";
import { Button, Drawer } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Bars4Icon, ChevronRightIcon } from "@heroicons/react/24/solid";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Button onClick={openDrawer} className="md:hidden ">
        <Bars4Icon strokeWidth={3} className="h-5 w-5 " />
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4 ">
        <div className="mb-6 flex items-center justify-between">
          <Sidebar />
        </div>
      </Drawer>
    </>
  );
};

export default MobileSidebar;

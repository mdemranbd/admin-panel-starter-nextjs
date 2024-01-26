"use client"
import React from "react";
import {
  Typography
} from "@material-tailwind/react";

import { USER_ROLE } from "@/app/constants/role";
import { Admin,  SuperAdmin } from "@/app/constants/sidebarItems";
 
export function Sidebar() {
  const role = USER_ROLE.SUPER_ADMIN
  const [open, setOpen] = React.useState(0);
  
  const roleComponentMap = {
    [USER_ROLE.SUPER_ADMIN]: <SuperAdmin />,
    [USER_ROLE.ADMIN]: <Admin />,
    [USER_ROLE.SEO_EXECUTIVE]: "",
  };

 
  return (
    <div  className="space-y-4 py-4 flex flex-col text-white h-full ">
      <div className="mb-2 p-4">
        <Typography className="text-center" variant="h2" color="blue-gray">
          AI vision
        </Typography>
      </div>
      {roleComponentMap[role]}
    </div>
  );
}
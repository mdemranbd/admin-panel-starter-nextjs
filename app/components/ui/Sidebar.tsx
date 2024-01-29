"use client";
import React from "react";
import { USER_ROLE } from "@/app/constants/role";
import { Admin, SuperAdmin } from "@/app/constants/sidebarItems";

export function Sidebar() {
  const role = USER_ROLE.SUPER_ADMIN;

  const roleComponentMap = {
    [USER_ROLE.SUPER_ADMIN]: <SuperAdmin />,
    [USER_ROLE.ADMIN]: <Admin />,
    [USER_ROLE.SEO_EXECUTIVE]: "",
  };

  return (
    <div className="space-y-4 py-4 flex flex-col text-white h-full">
      {roleComponentMap[role]}
    </div>
  );
}

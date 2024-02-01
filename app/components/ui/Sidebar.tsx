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
    <div>
      {roleComponentMap[role]}
    </div>
  );
}

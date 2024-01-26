// import React from "react";
// import {
//   IconButton,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Alert,
//   Input,
//   Drawer,
//   Card,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   CubeTransparentIcon,
//   MagnifyingGlassIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import { Sidebar } from "./Sidebar";
 
// export function MobileSidebar() {
//   const [open, setOpen] = React.useState(0);
//   const [openAlert, setOpenAlert] = React.useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
 
//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);
 
//   return (
//     <>
//       <IconButton variant="text" size="lg" onClick={openDrawer}>
//         {isDrawerOpen ? (
//           <XMarkIcon className="h-8 w-8 stroke-2" />
//         ) : (
//           <Bars3Icon className="h-8 w-8 stroke-2" />
//         )}
//       </IconButton>
//       <Drawer open={isDrawerOpen} onClose={closeDrawer}>
//       <Sidebar/>
//       </Drawer>
//     </>
//   );
// }
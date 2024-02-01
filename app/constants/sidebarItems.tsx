"use client";
import React, { useState } from "react";
import logo from "../../assets/cybercraft.png";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  CircleStackIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ChatBubbleBottomCenterIcon,
  AtSymbolIcon,
  FlagIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { USER_ROLE } from "./role";
import Image from "next/image";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export function SuperAdmin() {
  const [open, setOpen] = React.useState(0);
  const role = USER_ROLE.SUPER_ADMIN;
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="h-screen w-full max-w-[280px] p-4 ">
      <div className=" flex items-center justify-between gap-4 p-4">
        <Image src={logo} alt="cyberCraft logo" className="h-8 w-8" />
        <Typography variant="h6" color="blue-gray">
          AI Vision Master Admin
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
            <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/ai-integration`}>AI Integration</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/add-chatgpt`}>Add ChatGPT</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/seo-executive"}>SEO executive</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/admin"}>Vendor</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        {/* Keyword Research */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Keyword Research
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/create-profile-keyword`}>
                  Create Profile keyword
                </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/create-blog-keyword`}>
                  Create Blog Post Keyword
                </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/my-status`}>My Status</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        {/* Android Application */}
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Android Application
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/create-app-profile`}>
                  Create Apps Profile
                </Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={`/${role}/list-app-profile`}>List Of Profile</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        {/* All List Items */}
        <ListItem>
          <ListItemPrefix>
            <CircleStackIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/ai-integration`}>AI Integration</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <GlobeAltIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/web-application`}>Web Application</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <DevicePhoneMobileIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/mobile-specification`}>
            Mobile Specification
          </Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/ev-reviews`}>EVs Reviews</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <QuestionMarkCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/question-answer`}>Question & Answer</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AtSymbolIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/email-management`}>Email Management</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/admin-management`}>Admin Management</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FlagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/report`}>Report</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ServerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/database-management`}>Database management</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={`/${role}/profile`}>Profile</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </div>
  );
}
export function Admin() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="space-y-4  flex flex-col  h-full ">
      <div className="p-4 rounded-r-full">
        <Typography className="text-center " variant="h1">
          AI vision
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={3.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 rounded-r-full" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 "
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-norma">Dashboard</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 ">
              <ListItem className="rounded-r-full">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/admin"}>Admin</Link>
              </ListItem>
              <ListItem className="rounded-r-full">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/seo-executive"}>SEO executive</Link>
              </ListItem>
              <ListItem className="rounded-r-full">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/admin"}>Vendor</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className=" rounded-r-full ">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={"/profile"}>Profile</Link>
        </ListItem>

        <ListItem className="rounded-r-full ">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={"/settings"}>Settings</Link>
        </ListItem>
        <ListItem className="rounded-r-full">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={"/login"}>Log Out</Link>
        </ListItem>
      </List>
    </div>
  );
}

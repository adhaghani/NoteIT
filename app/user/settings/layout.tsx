"use client";

import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChartNoAxesGantt } from "lucide-react";
const SubLink = [
  {
    title: "Profile",
    href: "/user/settings/profile"
  },
  {
    title: "Password",
    href: "/user/settings/password"
  },
  {
    title: "Notification",
    href: "/user/settings/notification"
  },
  {
    title: "Display",
    href: "/user/settings/display"
  },
  {
    title: "2FA",
    href: "/user/settings/mfa"
  }
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className={`w-full md:w-[--sidebar-width]`}>
        {isMobile ? (
          <Drawer>
            <DrawerTrigger className="xl:hidden">
              <ChartNoAxesGantt className="size-6" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerDescription>
                  Manage your account settings.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-2">
                <ul className=" space-y-2">
                  {SubLink.map((link) => (
                    <DrawerClose
                      asChild
                      key={link.title}
                      className="p-2 hover:bg-muted block whitespace-nowrap xl:whitespace-normal  rounded cursor-pointer"
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </DrawerClose>
                  ))}
                </ul>
              </div>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <ul className="xl:space-y-2 md:flex flex-row xl:flex-col  hidden xl:gap-2">
            {SubLink.map((link) => (
              <li
                key={link.title}
                className="p-2 hover:bg-muted block rounded cursor-pointer"
              >
                <Link className="block w-full h-full" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SettingsLayout;

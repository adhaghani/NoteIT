"use client";

import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChartNoAxesGantt } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const SubLink = [
  {
    title: "Profile",
    href: "/user/settings/profile"
  },
  {
    title: "Account",
    href: "/user/settings/account"
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
    title: "Two Factor Authentication",
    href: "/user/settings/mfa"
  }
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col xl:flex-row gap-2">
      <div className="w-1/5">
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
                    <li
                      key={link.title}
                      className="p-2 hover:bg-muted block whitespace-nowrap xl:whitespace-normal  rounded cursor-pointer"
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <ul className="space-y-2 md:block hidden">
            {SubLink.map((link) => (
              <li
                key={link.title}
                className="p-2 hover:bg-muted block whitespace-nowrap xl:whitespace-normal  rounded cursor-pointer"
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

import { Dock, DockIcon } from "@/components/ui/dock";

import React from "react";
import Link from "next/link";

import {
  Home,
  Pen,
  UsersRound,
  Settings,
  BookHeart,
  LogOut,
  Search
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

const DockerData = {
  main: [
    {
      icon: <Home className="size-5" />,
      title: "Home",
      link: "/"
    },
    {
      icon: <Pen className="size-5" />,
      title: "Create Notes",
      link: "/notes"
    },
    {
      icon: <Search className="size-5" />,
      title: "Search Notes",
      link: "/notes/search"
    }
  ],
  app: [
    {
      icon: <UsersRound className="size-5" />,
      title: "Following",
      link: "/Following"
    },
    {
      icon: <BookHeart className="size-5" />,
      title: "Favourites",
      link: "/favorites"
    }
  ]
};

const Docker = () => {
  return (
    <div className="relative">
      <Dock direction="middle">
        {DockerData.main.map((item, index) => (
          <DockIcon key={index}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={item.link}>{item.icon}</Link>
              </TooltipTrigger>
              <TooltipContent className="mb-2">{item.title}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" />
        {DockerData.app.map((item, index) => (
          <DockIcon key={index}>
            <Tooltip>
              <TooltipTrigger>{item.icon}</TooltipTrigger>
              <TooltipContent className="mb-2">{item.title}</TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <Settings className="size-5" />
            </TooltipTrigger>
            <TooltipContent className="mb-2">Settings</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <LogOut className="size-5" />
            </TooltipTrigger>
            <TooltipContent className="mb-2">Logout</TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default Docker;

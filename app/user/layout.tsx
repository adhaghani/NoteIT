"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Docker from "@/components/nav-docker";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider open>
      <AppSidebar />
      <SidebarInset>
        <header className="flex w-full md:w-[calc(100vw-16rem)] h-14 z-40 shrink-0 items-center border-b bg-sidebar gap-2 fixed right-0 top-0">
          <div className="flex flex-1 items-center gap-2 pl-6">
            {isMobile && <SidebarTrigger />}
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-6xl w-full mx-auto py-[5rem]">
          {children}
          <div className="fixed bottom-5 left-1/2 md:ml-[5%] -translate-x-1/2">
            <Docker />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PageLayout;

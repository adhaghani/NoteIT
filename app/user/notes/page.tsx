"use client";

import React from "react";
import NoteCard from "@/components/note-card";
import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Plus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
const NotePage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="w-full mb-5">
        {isMobile ? (
          <AspectRatio ratio={2 / 1} className="bg-muted relative">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-md object-cover"
            />
            <Button asChild className="z-10 absolute bottom-5 right-5">
              <Link href={"/user/notes/group-name"}>View All</Link>
            </Button>
          </AspectRatio>
        ) : (
          <AspectRatio ratio={2 / 0.5} className="bg-muted relative">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-md object-cover"
            />
            <Button asChild className="z-10 absolute bottom-5 right-5">
              <Link href={"/user/notes/group-name"}>View All</Link>
            </Button>
          </AspectRatio>
        )}
      </div>
      <div className="flex justify-between items-start gap-2">
        <Text as="h3" className="m-0">
          🤖 - CSC256 Object Oriented Programming
        </Text>
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href="/user/notes/new">
              <Plus />
              New Note
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={"icon"} variant={"secondary"}>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit Note</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-5">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
      <Separator className="my-5" />
    </>
  );
};

export default NotePage;

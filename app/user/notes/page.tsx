import React from "react";
import NoteCard from "@/components/note-card";
import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Plus, MoreHorizontal, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
const NotePage = () => {
  return (
    <>
      <div>
        <Text as="h3" className="m-0">
          Recent Notes
        </Text>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-5">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
      <Separator className="my-5" />
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
    </>
  );
};

export default NotePage;

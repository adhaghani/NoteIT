import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/typograhpy";
import NoteCard from "@/components/note-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const SearchPage = () => {
  return (
    <div>
      <Text as="h3" className="mb-4">
        Search Notes
      </Text>
      <div className=" flex justify-center items-center gap-2">
        <Input placeholder="Find your notes..." />
        <Button className="max-w-[250px]">
          <Search />
          Search Notes
        </Button>
      </div>
      <Separator className="my-10" />
      <div className="flex justify-between items-start gap-2">
        <Text as="h3" className="m-0">
          Recent Notes
        </Text>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/user/notes">
            <ArrowLeft />
            View All
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-10">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default SearchPage;

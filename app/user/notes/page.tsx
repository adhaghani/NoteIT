"use client";

import React from "react";
import { Text } from "@/components/ui/typograhpy";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal } from "lucide-react";
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

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from "@/components/ui/minimal-card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
const cards = [
  {
    title: "CSC256 Object Oriented Programming",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "CSC128 Computer Organization",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "CSC126 Data Structures",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "CSC350 Software Engineering",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  },
  {
    title: "CSC365 Web Development",
    description:
      "How to design with gestures and motion that feel intuitive and natural."
  }
];

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
      <div className="flex gap-2 flex-wrap">
        <Badge>Technology</Badge>
        <Badge>Development</Badge>
        <Badge>Front-end Development</Badge>
        <Badge>Back-End Development</Badge>
        <Badge>Database</Badge>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <MinimalCard key={index}>
            <MinimalCardImage
              alt="image"
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            />
            <MinimalCardTitle>{card.title}</MinimalCardTitle>
            <MinimalCardDescription>{card.description}</MinimalCardDescription>
          </MinimalCard>
        ))}
      </div>
    </>
  );
};

export default NotePage;

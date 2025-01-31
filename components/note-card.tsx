"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { Text } from "@/components/ui/typograhpy";
import { redirect } from "next/navigation";

const NoteCard = () => {
  const handleRedirect = () => {
    redirect("/user/notes/23");
  };

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className="cursor-pointer" onClick={handleRedirect}>
          <CardHeader className="flex flex-row justify-between items-start space-y-0 gap-2">
            <CardTitle className="whitespace-nowrap text-ellipsis overflow-hidden w-full">
              📍 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam, et!
            </CardTitle>
            <CardDescription className="whitespace-nowrap">
              updated @ 10.00 A.M
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text
              as="p"
              className="whitespace-nowrap text-ellipsis overflow-hidden w-full"
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              nostrum.
            </Text>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <Text as="p" className="text-sm">
          View Notes Details
        </Text>
      </HoverCardContent>
    </HoverCard>
  );
};

export default NoteCard;

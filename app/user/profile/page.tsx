import React from "react";

import { Text } from "@/components/ui/typograhpy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Github, Linkedin, Twitter, Laptop } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    username: "AdhaghaniAdha",
    link: "https://twitter.com/AdhaghaniAdha",
    icon: <Twitter />
  },
  {
    name: "Github",
    username: "adhaghani",
    link: "https://github.com/adhaghani",
    icon: <Github />
  },
  {
    name: "LinkedIn",
    username: "Adhaghani",
    link: "https://linkedin.com/in/adhaghani",
    icon: <Linkedin />
  },
  {
    name: "Website",
    username: "Adhaghani.com",
    link: "https://adhaghani.com",
    icon: <Laptop />
  }
];

interface ProfileFormProps {
  defaultValues?: {
    name: string;
    username: string;
    email: string;
    phone: string;
    avatar: string;
    bio: string;
    location?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
  };
}

const ProfilePage = ({ defaultValues }: ProfileFormProps) => {
  return (
    <div className="w-full mx-auto space-y-8 py-6 bg-white/50 dark:bg-zinc-950/50">
      <div className="flex items-center justify-center">
        <Avatar className="h-24 w-24 rounded-full border-2 border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
          <AvatarImage
            src={defaultValues?.avatar}
            className="rounded-full object-cover"
          />
          <AvatarFallback className="bg-zinc-100 dark:bg-zinc-900">
            SC
          </AvatarFallback>
        </Avatar>
      </div>
      <div>
        <Text as="h4" className="text-center">
          @Adhaghani
        </Text>
        <div className="flex items-center justify-center gap-2">
          <Text as="p" styleVariant="muted" className="mt-1 text-center">
            50 Notes
          </Text>
          <Text as="p" styleVariant="muted" className="mt-1 text-center">
            23,500 followers
          </Text>
        </div>
      </div>
      <Card>
        <CardHeader>
          <Text as="p" className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab impedit
            dignissimos incidunt, dolorum assumenda aliquam dolores labore porro
            voluptatem cumque fuga itaque maiores debitis rerum?
          </Text>
        </CardHeader>
      </Card>

      <div className="mt-4  grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            className="flex shadow-sm gap-2 border p-2 rounded items-center"
            href={link.link}
          >
            {link.icon}
            <Separator orientation="vertical" className="h-4" />

            <Text as="p">@{link.username}</Text>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;

import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import { Github, Linkedin, Twitter, Laptop } from "lucide-react";

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

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <Text as="h3">Profile Setting</Text>
        <Button variant={"secondary"} size={"sm"} asChild>
          <Link href={"/user/settings/profile/edit"}>Edit Profile</Link>
        </Button>
      </div>
      <Text as="p" styleVariant="muted" className="mt-2">
        Change what people see when they view your profile.
      </Text>
      <Separator className="my-4" />
      <div className="flex flex-col justify-center items-center my-8 gap-4">
        <Avatar className="size-24">
          <AvatarImage
            src={"https://github.com/adhaghani.png"}
            alt={"shadcn"}
          />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between gap-2">
          <Text as="h3">Adhaghani</Text>
        </div>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Full Name</CardTitle>
            <CardDescription>
              This is the name displayed on your profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text as="h3">Ahmad Adha</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle>Email Address</CardTitle>
              <CardDescription>The email for your account.</CardDescription>
            </div>
            <Badge className="flex items-center gap-1" variant={"secondary"}>
              <BadgeCheck className="size-4" />
              Verified
            </Badge>
          </CardHeader>
          <CardContent>
            <Text as="h3">adhaahmadwork@gmail.com</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Phone Number</CardTitle>
            <CardDescription>
              The phone number linked to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text as="h3">+60182017884</Text>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Text as="h3">Social Media Links</Text>
      </div>
      <Text as="p" styleVariant="muted" className="mt-2">
        Social Media owned by you.
      </Text>
      <div className="mt-4  grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            className="flex gap-2 border p-2 rounded items-center"
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

export default page;

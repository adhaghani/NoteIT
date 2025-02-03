import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <Text as="h3">Profile Setting</Text>
        <Button variant={"secondary"} size={"sm"}>
          Edit Profile
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
          </CardHeader>
          <CardContent>
            <Text as="h3">Ahmad Adha</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Email Address
              <Badge className="flex items-center gap-1" variant={"secondary"}>
                <BadgeCheck className="size-4" />
                Verified
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text as="h3">adhaahmadwork@gmail.com</Text>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Phone Number</CardTitle>
          </CardHeader>
          <CardContent>
            <Text as="h3">+60182017884</Text>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex justify-between items-center gap-2">
        <Text as="h3">Social Media Links</Text>
        <Button variant={"secondary"} size={"sm"}>
          Edit Links
        </Button>
      </div>
      <Text as="p" styleVariant="muted" className="mt-2">
        Social Media owned by you.
      </Text>
      <div className="mt-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-2 flex-wrap">
            <Text as="h3">@adhaghani</Text>
            <Button asChild>
              <Link
                className="mt-3 text-sm"
                href={"https://github.com/adhaghani"}
              >
                View Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-2 flex-wrap">
            <Text as="h3">@adhaghani</Text>
            <Button asChild>
              <Link
                className="mt-3 text-sm"
                href={"https://github.com/adhaghani"}
              >
                View Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-2 flex-wrap">
            <Text as="h3">@adhaghani</Text>
            <Button asChild>
              <Link
                className="mt-3 text-sm"
                href={"https://github.com/adhaghani"}
              >
                View Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center gap-2 flex-wrap">
            <Text as="h3">@adhaghani</Text>
            <Button asChild>
              <Link
                className="mt-3 text-sm"
                href={"https://github.com/adhaghani"}
              >
                View Profile
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;

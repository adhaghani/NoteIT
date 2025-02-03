"use client";

import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
const page = () => {
  const [isEnabled, setisEnabled] = useState<boolean>(false);
  return (
    <div>
      <Text as="h3">Two-Factor Authentication</Text>
      <Text as="p" styleVariant="muted" className="mt-2">
        To better secure your account, we recommend enabling two-factor
        authentication.
      </Text>
      <Separator className="my-4" />
      <div className="bg-secondary rounded shadow mt-4 p-4 flex justify-between gap-2 items-center">
        <Text as="h4">Enable Two-Factor Authentication</Text>
        <Switch checked={isEnabled} onCheckedChange={setisEnabled} />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        We will send an email to your email address containing the OTP code.
        Once done, OTP is enabled successfully and you will be required to input
        OTP for every new session.
      </Text>
      <div>
        <Text
          as="p"
          styleVariant="muted"
          className={`mt-4 ${isEnabled ? "" : "text-red-500"}`}
        >
          {isEnabled
            ? "Enabled at - 23/10/2024 12:05:12"
            : "you have not enabled MFA"}
        </Text>
      </div>
    </div>
  );
};

export default page;

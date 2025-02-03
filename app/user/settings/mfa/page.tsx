import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
const page = () => {
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
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        We will send an email to your email address containing the OTP code.
        Once done, OTP is enabled successfully and you will be required to input
        OTP for every new session.
      </Text>
    </div>
  );
};

export default page;

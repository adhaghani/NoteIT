import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const page = () => {
  return (
    <div>
      <Text as="h3">Password</Text>
      <Text as="p" styleVariant="muted" className="mt-2 max-w-2xl">
        Update the password for your account. a confirmation email will be sent
        to your email everytime you change your password.
      </Text>
      <Separator className="my-4" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Current Password</Label>
          <Input />
          <Text as="p" styleVariant="muted">
            Your Current Password
          </Text>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-2">
            <Label>New Password</Label>
            <Input />
            <Text as="p" styleVariant="muted">
              enter your new password
            </Text>
          </div>
          <div className="w-full space-y-2">
            <Label>Confirm New Password</Label>
            <Input />
            <Text as="p" styleVariant="muted">
              confirm your new password
            </Text>
          </div>
        </div>
        <Button>Change Password</Button>
      </div>
    </div>
  );
};

export default page;

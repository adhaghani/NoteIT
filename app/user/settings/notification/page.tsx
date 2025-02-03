import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const page = () => {
  const boxClassName = "rounded mt-4 flex justify-between gap-2 items-center";
  return (
    <div>
      <Text as="h3">Notification Setting</Text>
      <Text as="p" styleVariant="muted" className="mt-2">
        Adust the notifications you want to received.
      </Text>
      <Separator className="my-4" />
      <div className={boxClassName}>
        <Text as="h4">Notification</Text>
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        I want to receive notifications from the app.
      </Text>
      <div className={boxClassName}>
        <Text as="h4">Email Notifications</Text>
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        Receive email notifications about your account activity.
      </Text>
      <div className={boxClassName}>
        <Text as="h4">Activity Notifications</Text>
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        Receive Notification from every activity that is related to your
        account.
      </Text>
      <div className={boxClassName}>
        <Text as="h4">System Updates</Text>
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        Receive system updates and latest changes.
      </Text>
      <div className={boxClassName}>
        <Text as="h4">Newsletter</Text>
        <Switch />
      </div>
      <Text as="p" styleVariant="muted" className="mt-4">
        received our newsletter for additional information, updates and
        important notice.
      </Text>
    </div>
  );
};

export default page;

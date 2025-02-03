import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";
const page = () => {
  return (
    <div>
      <Text as="h3">Display Setting</Text>
      <Text as="p" styleVariant="muted" className="mt-2">
        Adjust the styles of the web application to your preference.
      </Text>
      <Separator className="my-4" />
    </div>
  );
};

export default page;

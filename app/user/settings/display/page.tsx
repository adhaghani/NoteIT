import { Text } from "@/components/ui/typograhpy";
import { Separator } from "@/components/ui/separator";

const BrowserTheme = ({ isDark }: { isDark: boolean }) => {
  return (
    <div
      className={`border aspect-square rounded-lg overflow-hidden ${
        isDark ? "bg-gray-600 border-slate-800" : "bg-white"
      }`}
    >
      <div
        className={`px-4 w-full h-9  ${
          isDark ? "bg-slate-800" : "bg-muted"
        } flex gap-2 items-center`}
      >
        <div className="rounded-full w-4 h-4 bg-red-500"></div>
        <div className="rounded-full w-4 h-4 bg-yellow-500"></div>
        <div className="rounded-full w-4 h-4 bg-green-500"></div>
      </div>
      <div className="flex gap-2 w-full h-full">
        <div
          className={`${isDark ? "bg-slate-800" : "bg-muted"} w-1/4 h-full`}
        ></div>
        <div className="w-3/4 h-full mr-2">
          <div
            className={`w-full my-2 h-10 ${
              isDark ? "bg-slate-800" : "bg-muted"
            }`}
          ></div>
          <div
            className={`w-full my-2 h-10 ${
              isDark ? "bg-slate-800" : "bg-muted"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <Text as="h3">Display Setting</Text>
      <Text as="p" styleVariant="muted" className="mt-2">
        Adjust the styles of the web application to your preference.
      </Text>
      <Separator className="my-4" />
      <Text as="h4">Themes</Text>
      <Text as="p" styleVariant="muted" className="mt-1">
        choose your preferred theme.
      </Text>
      <div className="grid grid-cols-2 gap-4 mt-4 max-w-xl">
        <BrowserTheme isDark={false} />

        <BrowserTheme isDark={true} />
        <Text as="p" styleVariant="muted" className="mt-1 text-center">
          Light Mode
        </Text>
        <Text as="p" styleVariant="muted" className="mt-1 text-center">
          Dark Mode
        </Text>
      </div>
    </div>
  );
};

export default page;

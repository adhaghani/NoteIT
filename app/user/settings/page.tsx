import { redirect } from "next/navigation";

const SettingPage = () => {
  return redirect("/user/settings/profile");
};

export default SettingPage;

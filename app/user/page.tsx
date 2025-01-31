import { redirect } from "next/navigation";

const page = () => {
  return redirect("/user/dashboard");
};

export default page;

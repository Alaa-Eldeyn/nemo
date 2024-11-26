import { LuUser2 } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <img src={profileImage} className="!size-5 rounded-full object-cover" />
    );
  return <LuUser2 className="!size-5 bg-primary rounded-full text-white" />;
}
export default UserIcon;

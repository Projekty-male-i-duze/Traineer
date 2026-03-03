import { userProfileData } from "../../../constants/profileData";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileInfo } from "./ProfileInfo";

export function ProfileHeader() {
  const profile = userProfileData;

  return (
    <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-(--glass-color)/50 p-6 backdrop-blur-xl sm:flex-row sm:items-center">
      <ProfileAvatar />
      <ProfileInfo profile={profile} />
    </div>
  );
}

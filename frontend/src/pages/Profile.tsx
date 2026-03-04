import { Achievements } from "../components/Profile/Achievements/Achievements";
import { LifetimeStats } from "../components/Profile/LifeTimeStats/LifeTimeStats";
import { ProfileHeader } from "../components/Profile/ProfileHeader/ProfileHeader";

export function Profile() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <ProfileHeader />
      <div className="flex flex-col gap-8 sm:flex-row">
        <LifetimeStats />
        <div className="flex-1">
          <div className="h-full rounded-4xl text-center text-gray-500">
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}

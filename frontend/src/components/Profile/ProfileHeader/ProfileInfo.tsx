import { Edit2 } from "lucide-react";
import type { Profile } from "../../../types/profileType";

interface ProfileInfoProps {
  profile: Profile;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
        <button className="cursor-pointer text-gray-400 transition-colors hover:text-(--hover-color)">
          <Edit2 size={20} />
        </button>
      </div>

      <p className="max-w-2xl leading-relaxed text-gray-400">
        {profile.description}
      </p>

      <div className="mt-2 flex gap-8">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-500 uppercase">
            Dołączył
          </span>
          <span className="font-semibold text-white">
            {profile.dateOfJoining}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-500 uppercase">
            Poziom
          </span>

          <span
            className={`font-bold ${profile.level === "pro" ? "text-(--hover-color)" : "text-white"}`}
          >
            {profile.level.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

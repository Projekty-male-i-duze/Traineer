import { userProfileData } from "../../constants/profileData";
import { Camera, Edit2 } from "lucide-react";

export function ProfileHeader() {
  const profile = userProfileData;

  return (
    <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-(--glass-color)/50 p-6 backdrop-blur-xl sm:flex-row sm:items-center">
      <div className="relative h-32 w-32 shrink-0">
        <img
          src="https://github.com/shadcn.png"
          alt="Zdjęcie użytkownika"
          className="h-full w-full rounded-full object-cover"
        />
        <button className="absolute right-0 bottom-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--hover-color) text-white transition-transform hover:scale-110">
          <Camera size={20} />
        </button>
      </div>

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
    </div>
  );
}

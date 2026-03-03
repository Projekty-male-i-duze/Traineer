import { Camera } from "lucide-react";

export function ProfileAvatar() {
  return (
    <div className="relative h-32 w-32 shrink-0">
      <img
        src="/dog.jpg"
        alt="Zdjęcie użytkownika"
        className="h-full w-full rounded-full object-cover"
      />
      <button className="absolute right-0 bottom-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--hover-color) text-white transition-transform hover:scale-110">
        <Camera size={20} />
      </button>
    </div>
  );
}

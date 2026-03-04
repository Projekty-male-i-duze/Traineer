type AchievementCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
};

export function AchievementCard({
  title,
  description,
  icon,
  isUnlocked,
}: AchievementCardProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-3xl bg-(--glass-color)/50 p-4 shadow-md ${
        isUnlocked ? "opacity-100" : "opacity-40"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/30">
        {icon}
      </div>
      <div className="m-auto flex flex-col">
        <p className="mb-1 font-bold text-(--text-color)">{title}</p>
        <p className="text-[10px] font-bold tracking-wider text-(--text-color) uppercase">
          {description}
        </p>
      </div>
    </div>
  );
}

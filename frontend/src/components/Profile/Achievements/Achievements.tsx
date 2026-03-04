import { Activity, CalendarDays, Dumbbell, Medal, Sunrise } from "lucide-react";
import { AchievementCard } from "./AchievementsCard";

export function Achievements() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2 px-2">
        <Medal className="text-(--hover-color)" size={20} />
        <h2 className="text-lg font-bold text-white">Osiągnięcia</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AchievementCard
          title="Pierwsza Tona"
          description="Przerzucono łącznie 1000kg"
          icon={<Dumbbell className="text-(--hover-color)" size={24} />}
          isUnlocked={true}
        />
        <AchievementCard
          title="Wczesny Ptaszek"
          description="Trening przed 7:00 rano"
          icon={<Sunrise className="text-(--hover-color)" size={24} />}
          isUnlocked={true}
        />
        <AchievementCard
          title="Bestia Cardio"
          description="30 min biegu bez przerwy"
          icon={<Activity className="text-(--hover-color)" size={24} />}
          isUnlocked={false}
        />
        <AchievementCard
          title="Regularność"
          description="7 dni treningów pod rząd"
          icon={<CalendarDays className="text-(--hover-color)" size={24} />}
          isUnlocked={false}
        />
      </div>
    </div>
  );
}

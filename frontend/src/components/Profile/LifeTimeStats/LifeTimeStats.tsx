import { TrendingUp, Flame } from "lucide-react";
import { SingleRow } from "./SingleRow";

export function LifetimeStats() {
  return (
    <div className="flex w-full flex-col gap-4 sm:w-1/3">
      <div className="flex items-center gap-2 px-2">
        <TrendingUp className="text-(--hover-color)" size={20} />
        <h2 className="text-lg font-bold text-(--text-color)">
          Statystyki Życiowe
        </h2>
      </div>
      <div className="flex flex-col gap-6 rounded-4xl bg-(--glass-color)/50 p-8">
        <SingleRow label="Treningi" sum={42} />
        <SingleRow label="Dni z rzędu" sum={12} orange={true}>
          <Flame
            className="text-(--hover-color)"
            size={24}
            fill="currentColor"
          />
        </SingleRow>
        <SingleRow label="Najlepszy tonaż" sum={4.2} unit="t" />
      </div>
    </div>
  );
}

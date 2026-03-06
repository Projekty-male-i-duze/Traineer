import { Play } from "lucide-react";

type PlanCardProps = {
  title: string;
  subtitle: string;
  isActive?: boolean;
};

export function PlanCard({ title, subtitle, isActive = false }: PlanCardProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-4xl bg-(--glass-color)/50 p-6">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold">{title}</span>
        <span className="mt-1 text-sm font-medium text-(--grey-color-text)">
          {subtitle}
        </span>
      </div>
      <button
        className={`flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors ${
          isActive
            ? "bg-(--hover-color) text-(--text-color)"
            : "bg-(--text-color)/5 text-(--grey-color-text)"
        }`}
      >
        <Play fill="currentColor" size={20} className="ml-1" />
      </button>
    </div>
  );
}

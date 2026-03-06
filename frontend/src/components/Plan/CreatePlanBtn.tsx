import { Plus } from "lucide-react";

export function CreatePlanBtn() {
  return (
    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border-2 border-dashed border-(--text-color)/10 bg-transparent p-6 text-(--grey-color-text) transition-colors hover:border-(--hover-color) hover:text-(--hover-color)">
      <Plus size={20} />
      <span className="font-bold">Stwórz nowy plan</span>
    </button>
  );
}

import { CreatePlanBtn } from "./CreatePlanBtn";
import { PlanCard } from "./PlanCard";

export function MainPlan() {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-10 p-4 md:p-8">
      <div className="flex w-full flex-col gap-4">
        <PlanCard
          title="Push / Pull / Legs"
          subtitle="3-6 dni w tygodniu"
          isActive={true}
        />
        <PlanCard title="Upper / Lower" subtitle="4 dni w tygodniu" />
        <PlanCard title="FBW dla początkujących" subtitle="3 dni w tygodniu" />
        <div className="mt-2">
          <CreatePlanBtn />
        </div>
      </div>
    </div>
  );
}

import { personalGoals } from "../../constants/goalData";
import { calculateGoalProgress } from "../../utils/goal";

export function GoalProgress() {
  const goal = personalGoals[0];

  const { percentage, remaining } = calculateGoalProgress(
    goal.start,
    goal.current,
    goal.end,
  );

  return (
    <div className="mt-7 flex w-full flex-col gap-4 overflow-hidden rounded-2xl bg-(--glass-color)/50 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Twój cel: {goal.title}</h2>
      </div>

      <div className="flex justify-between text-sm text-(--text-color) md:mt-3 md:text-base">
        <span>
          Start: {goal.start}
          {goal.unit}
        </span>
        <span className="font-bold text-white">
          Obecnie: {goal.current}
          {goal.unit}
        </span>
        <span>
          Cel: {goal.end}
          {goal.unit}
        </span>
      </div>

      <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-(--hover-color) transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-center text-xs md:text-base">
        Zostało Ci jeszcze {remaining}
        {goal.unit} do celu! Oby tak dalej!
      </p>
    </div>
  );
}

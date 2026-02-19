import { ProgressChart } from "../components/Chart/ProgressChart";
import { GoalProgress } from "../components/GoalProgress/GoalProgress";
import { PersonalRecords } from "../components/PersonalRecords/PersonalRecords";
import { TrainingHome } from "../components/TrainingOverview/TrainingHome";

export function Training() {
  return (
    <>
      <TrainingHome />
      <ProgressChart />
      <PersonalRecords />
      <GoalProgress />
    </>
  );
}

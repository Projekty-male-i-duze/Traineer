import { ProgressChart } from "../components/Chart/ProgressChart";
import { PersonalRecords } from "../components/PersonalRecords/PersonalRecords";
import { TrainingHome } from "../components/TrainingOverview/TrainingHome";

export function Training() {
  return (
    <>
      <TrainingHome />
      <ProgressChart />
      <PersonalRecords />
    </>
  );
}

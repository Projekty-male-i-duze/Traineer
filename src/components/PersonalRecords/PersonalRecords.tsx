import { Dumbbell, Timer } from "lucide-react";
import { personalRecords } from "../../constants/personalRecords";

export function PersonalRecords() {
  return (
    <div className="mt-7 flex w-full flex-col gap-4 overflow-hidden rounded-2xl bg-(--glass-color)/50 p-6 backdrop-blur-xl">
      <h2 className="mb-3 text-2xl font-bold">Rekordy osobiste</h2>

      <div className="flex flex-col gap-3">
        {personalRecords.map((record) => {
          return (
            <div key={record.id} className="flex items-center justify-between">
              <div className="flex grow items-center gap-2 md:gap-3">
                {record.icon === "dumbbell" ? <Dumbbell className="h-6 w-6 md:h-8 md:w-8" /> : <Timer className="h-6 w-6 md:h-8 md:w-8" />}
                <div className="flex flex-col">
                  <span className="font-bold text-(--text-color)">
                    {record.title}
                  </span>
                  <span className="text-xs text-(--hover-color)">
                    {record.category}
                  </span>
                </div>
              </div>
              <span className="p-2 text-xl">{record.value}</span>
              <div className="flex flex-col items-end">
                {record.progress === "positive" ? (
                  <>
                    <span className="text-(--green-color)">
                      {record.diffValue}
                    </span>
                    <span className="text-(--green-color)">
                      {record.percentageDiff}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

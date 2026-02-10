import { useState } from "react";
import { LineGraph } from "./Line";
import { lineChartData } from "../../constants/chartData";

export function ProgressChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { data } = lineChartData.datasets[0];

  const index = activeIndex ?? data.length - 1;
  const current = data[index];
  const prev = data[index - 1] ?? current;
  const diff = prev ? ((current - prev) / prev) * 100 : 0;

  return (
    <div className="mt-7 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-(--glass-color)/50 p-6 backdrop-blur-xl md:flex-row">
      <div className="w-full min-w-0 md:w-2/3">
        <h2 className="text-2xl font-bold">Twoje postępy</h2>
        <p className="my-2 text-sm text-(--text-color)">Dziennie przez 7 dni</p>
        <LineGraph onPointHover={setActiveIndex} />
      </div>
      <div className="flex w-full flex-col items-center gap-1 md:w-1/3 md:items-end">
        <span className="text-4xl font-bold text-(--text-color)">
          {current >= 1000 ? `${(current / 1000).toFixed(1)}k` : current}
          <span className="ml-4 text-lg text-(--text-color)">kroków</span>
        </span>
        <div
          className={`flex items-center gap-1 text-lg font-bold ${
            diff > 0
              ? "text-(--green-color)"
              : diff < 0
                ? "text-(--red-color)"
                : "text-(--text-color)"
          }`}
        >
          {diff > 0 && "↑"} {diff < 0 && "↓"} {Math.abs(diff).toFixed(0)}%
        </div>
        <span className="text-xs uppercase">
          {lineChartData.labels[index]} {index > 0 ? "vs wczoraj" : "(start)"}
        </span>
      </div>
    </div>
  );
}

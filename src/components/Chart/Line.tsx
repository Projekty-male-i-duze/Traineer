import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { lineChartData } from "../../constants/chartData";
import { memo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

type LineGraphProps = {
  onPointHover: (index: number | null) => void;
};

function LineGraphComponent({ onPointHover }: LineGraphProps) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    onHover: (_event, elements) => {
      if (elements.length > 0) {
        onPointHover(elements[0].index);
      } else {
        onPointHover(null);
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1F2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        grid: { display: false, drawOnChartArea: false },
        border: { display: false },
        ticks: {
          color: "#fff",
          font: { size: 11 },
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: { display: false, min: 0 },
    },
    layout: { padding: { top: 20, bottom: 0, left: 0, right: 0 } },
    elements: {
      line: { tension: 0.5 },
      point: { radius: 0, hitRadius: 50, hoverRadius: 6 },
    },
  };

  return (
    <div className="h-45 w-full">
      <Line options={options} data={lineChartData} />
    </div>
  );
}

export const LineGraph = memo(LineGraphComponent);

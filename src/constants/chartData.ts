type ChartDataTypes = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointBorderWidth: number;
    borderWidth: number;
    fill?: boolean;
  }[];
};

export const lineChartData: ChartDataTypes = {
  labels: [
    "15 kwi",
    "16 kwi",
    "17 kwi",
    "18 kwi",
    "19 kwi",
    "20 kwi",
    "Dzisiaj",
  ],
  datasets: [
    {
      label: "Wynik",
      data: [2000, 4500, 3200, 5800, 4900, 7200, 8200],
      borderColor: "#ff8904",
      borderWidth: 3,
      pointBackgroundColor: "#FCD34D",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
    },
  ],
};

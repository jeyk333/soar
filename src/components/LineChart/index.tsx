import { FC, useMemo } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { ChartDataType } from '@/store/user/slice';

ChartJS.register(
  LineElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

interface Props {
  data: ChartDataType | undefined;
  isLoading: boolean;
}

const LineChart: FC<Props> = ({ data: details, isLoading }) => {
  const labels = useMemo(() => details?.labels || [], [details]);
  const values = useMemo(() => details?.values || [], [details]);
  const data: ChartData<'line', unknown, unknown> = {
    labels: [...labels],
    datasets: [
      {
        data: [...values],
        borderColor: '#1814F3',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          if (!context.chart.chartArea) {
            return;
          }

          const { ctx, chartArea } = context.chart;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, 'rgba(24, 20, 243, 0.2)');
          gradient.addColorStop(1, 'rgba(24, 20, 243, 0)');
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    pointRadius: 0,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: { display: false },
      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        grid: {
          display: true,
          color: '#DFE5EE',
        },
        border: {
          display: false,
          dash: [8],
        },
        ticks: {
          color: '#718EBF',
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: '#DFE5EE',
        },
        ticks: {
          startAtZero: true,
          stepSize: 200,
          color: '#718EBF',
          font: {
            size: 13,
          },
        },
        border: {
          display: false,
          dash: [8],
        },
      },
    },
  };

  if (isLoading)
    return (
      <div className="h-[276px] rounded-[25px] animate-pulse bg-gray-200"></div>
    );

  return (
    <div className="bg-white p-[25px] rounded-[25px]">
      <div className="h-[226px]">
        <Chart
          key={JSON.stringify(details)}
          type="line"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;

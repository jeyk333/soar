import { FC } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  ChartData,
  ChartTypeRegistry,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart: FC = () => {
  const data: ChartData<keyof ChartTypeRegistry, unknown, unknown> = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        data: [150, 420, 320, 400, 740, 340, 560],
        borderColor: '#1814F3',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        backgroundColor: 'red',
      },
    ],
  };

  const options = {
    responsive: true,
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

  return (
    <div>
      <div>
        <Chart type="line" data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;

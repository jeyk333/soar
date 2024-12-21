import { FC } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartTypeRegistry,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(LinearScale, BarElement, PointElement, Tooltip, Legend);

const BarChart: FC = () => {
  const legendSpace = {
    id: 'legendSpace',
    afterInit(chart: ChartJS) {
      if (chart) {
        const originalFit = chart?.legend.fit;
        chart.legend.fit = function fit() {
          if (originalFit) {
            originalFit.call(this);
          }
          return (this.height += 30);
        };
      }
    },
  };

  const data: ChartData<keyof ChartTypeRegistry, unknown, unknown> = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        type: 'bar',
        label: 'Withdraw',
        data: [450, 340, 320, 380, 240, 240, 360],
        backgroundColor: '#232323',
        borderColor: '#232323',
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        type: 'bar',
        label: 'Deposit',
        data: [242, 120, 280, 390, 240, 240, 320],
        backgroundColor: '#396AFF',
        borderColor: '#396AFF',
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: (chart: ChartJS) => {
            const datasets = chart.data.datasets;
            return datasets.map((dataset, i: number) => ({
              fontColor: '#718EBF',
              text: ` ${dataset.label}`,
              fillStyle: dataset.backgroundColor,
              hidden: !chart.isDatasetVisible(i),
              datasetIndex: i, // Dataset index,
            }));
          },
          usePointStyle: true,
          boxWidth: 15,
          boxHeight: 15,
          padding: 30,
          font: {
            size: 15,
          },
        },
        align: 'end',
      },
      datalabels: { display: false },
      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#718EBF',
          font: {
            size: 13,
          },
        },
      },
      y: {
        ticks: {
          stepSize: 100,
          padding: 16,
          color: '#718EBF',
          font: {
            size: 13,
          },
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div>
        <Chart
          className="-mt-4"
          type="bar"
          data={data}
          options={options}
          plugins={[legendSpace]}
        />
      </div>
    </div>
  );
};

export default BarChart;

import { FC } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  RadialLinearScale,
  ChartTypeRegistry,
  ArcElement,
  CategoryScale,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(RadialLinearScale, ArcElement, ChartDataLabels, CategoryScale);

const PolarAreaChart: FC = () => {
  const values = [25, 30, 25, 20];
  const colors = ['#343C6A', '#FC7900', '#232323', '#396AFF'];

  const data: ChartData<keyof ChartTypeRegistry, unknown, unknown> = {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        anchor: 'center',
        align: 'center',
        formatter: (value: number, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`;
        },
        font: {
          size: 16,
          weight: 700,
        },
        textAlign: 'center',
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        startAngle: -45,
        grid: {
          display: false,
        },
        angleLines: {
          display: false,
        },
        ticks: {
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
          type="polarArea"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default PolarAreaChart;

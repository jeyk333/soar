import { FC, useMemo } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { ChartDataType } from '@/store/user/slice';

ChartJS.register(RadialLinearScale, ArcElement, ChartDataLabels, CategoryScale);

interface Props {
  data: ChartDataType | undefined;
  isLoading: boolean;
}

const PolarAreaChart: FC<Props> = ({ data: details, isLoading }) => {
  const labels = useMemo(() => details?.labels || [], [details]);
  const values = useMemo(() => details?.values || [], [details]);

  const data: ChartData<'polarArea', unknown, unknown> = {
    labels: [...labels],
    datasets: [
      {
        data: [...values],
        backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
        borderWidth: 10,
      },
    ],
  };

  const options: ChartOptions<'polarArea'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        anchor: 'center',
        align: 'center',
        formatter: (value: number, context: Context) => {
          const label = context?.chart?.data?.labels
            ? context.chart.data.labels[context.dataIndex]
            : '';
          return `${value}%\n${label}`;
        },
        font: {
          size: 13,
          weight: 600,
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

  if (isLoading)
    return (
      <div className="h-[356px] rounded-[25px] animate-pulse bg-gray-200"></div>
    );

  return (
    <div className="bg-white p-[25px] rounded-[25px]">
      <div className="h-[322px]">
        <Chart
          key={JSON.stringify(details)}
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

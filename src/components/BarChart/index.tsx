import { FC, useMemo } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  BarElement,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  LegendItem,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS?.register(LinearScale, BarElement, PointElement, Tooltip, Legend);

export interface BarChartDataType {
  duration: string[];
  withdraw: number[];
  deposit: number[];
}

interface Props {
  data: BarChartDataType | undefined;
  isLoading: boolean;
}

const BarChart: FC<Props> = ({ data: details, isLoading }) => {
  //Custom plugin for legend
  const legendSpace = {
    id: 'legendSpace',
    afterInit(chart: ChartJS) {
      if (chart?.legend?.fit) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
          if (originalFit) {
            originalFit.call(this);
          }
          return (this.height += 30);
        };
      }
    },
  };

  const labels = useMemo(() => details?.duration || [], [details]);
  const withdrawData = useMemo(() => details?.withdraw || [], [details]);
  const depositData = useMemo(() => details?.deposit || [], [details]);

  const data: ChartData<'bar', unknown, unknown> = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: 'Withdraw',
        data: [...withdrawData],
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
        data: [...depositData],
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

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: (chart: ChartJS): LegendItem[] => {
            const datasets = chart?.data?.datasets;
            return datasets?.length
              ? datasets.map((dataset, i: number) => {
                  const fillStyle =
                    typeof dataset?.backgroundColor === 'string'
                      ? dataset?.backgroundColor
                      : undefined;
                  return {
                    fontColor: '#718EBF',
                    text: ` ${dataset?.label}`,
                    fillStyle: fillStyle,
                    hidden: !chart.isDatasetVisible(i),
                    datasetIndex: i,
                  };
                })
              : [];
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

  if (isLoading)
    return (
      <div className="h-[356px] rounded-[25px] animate-pulse bg-gray-200"></div>
    );

  return (
    <div className="bg-white p-[25px] rounded-[25px]">
      <div className="h-[322px]">
        <Chart
          className="-mt-4"
          key={JSON.stringify(details)}
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

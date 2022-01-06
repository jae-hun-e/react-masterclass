import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}
interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "loading"
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: `${coinId}가격`,
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: true,
                tools: {
                  download: false,
                  selection: false,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: false,
                  reset: true,
                },
              },
              background: "treansparent",
            },
            grid: { show: false },
            theme: { mode: "dark" },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: true,
              decimalsInFloat: 1,
              title: {
                text: "price",
                rotate: 0,
                style: {
                  color: "#13141f",
                  fontSize: "12px",
                  fontWeight: 500,
                },
              },
            },
            xaxis: {
              labels: { show: true },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            tooltip: { y: { formatter: (value) => `$${value.toFixed(3)}` } },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

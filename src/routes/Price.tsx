import { useQuery } from "react-query";
import { fetchCoinPriceHistory } from "../coinApi";
import ApexChart from "react-apexcharts";

interface IPriceProps {
  coinId: string;
}
interface ITodayPrice {
  market_cap: number;
  price: number;
  timestamp: string;
  volume_24h: number;
}

function Price({ coinId }: IPriceProps) {
  const { isLoading, data: price } = useQuery<ITodayPrice[]>(
    ["toDayPrice", coinId],
    () => fetchCoinPriceHistory(coinId)
  );
  console.log(price);
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="area"
          series={[
            {
              name: "ToDayPrice",
              data: price.map((data) => [data.timestamp, data.price]),
            },
          ]}
          options={{
            chart: {
              id: "area-datetime",
              type: "area",
              height: 500,
              width: 500,
              zoom: {
                autoScaleYaxis: true,
              },
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
            },

            dataLabels: {
              enabled: false,
            },
            xaxis: {
              type: "datetime",
              max: Date.now(),
              tickAmount: 100,
              labels: { show: true },
              axisTicks: { show: false },
              axisBorder: { show: false },
              // type: "datetime",
              categories: price?.map((price) => price.timestamp),
            },
            tooltip: {
              x: {
                format: "dd MMM yyyy",
              },
              y: { formatter: (value) => `$${value.toFixed(3)}` },
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100],
              },
            },
          }}
        />
      )}
    </>
  );
}

export default Price;

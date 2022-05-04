import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader";
import NotFound from "../NotFound";
import FilterList from "./FilterList";

type Props = {
  id: string;
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
};

const intervals = [
  { title: "1 H", interval: "h1" },
  { title: "2 H", interval: "h2" },
  { title: "6 H", interval: "h6" },
  { title: "12 H", interval: "h12" },
  { title: "1 D", interval: "d1" },
];

const HistoryChart = (props: Props) => {
  const screenWidth = Dimensions.get("window").width;
  const [interval, setInterval] = useState("d1");
  const [data, setData] = useState<LineChartData>({
    labels: [],
    datasets: [],
  });
  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: `/assets/${props.id}/history?interval=${interval}`,
    },
    "https://api.coincap.io/v2"
  );

  useEffect(() => {
    sendData();
  }, [interval]);

  useEffect(() => {
    if (!loading && response) {
      const historyData: LineChartData = {
        labels: [],
        datasets: [
          {
            data: [],
            color: (opacity = 1) => `rgba(0, 99, 245, ${opacity})`,
          },
        ],
      };

      for (const item of response?.data.data) {
        historyData.datasets[0].data.push(item.priceUsd);
      }

      setData({ ...historyData });
    }
  }, [loading]);

  return (
    <View style={styles.layout}>
      {loading && (
        <View style={{ height: 220 }}>
          <Loader size={"large"} color='rgba(0, 99, 245, 1)' />
        </View>
      )}
      {!loading && (
        <LineChart
          style={styles.chartLayout}
          data={data}
          width={screenWidth + 50}
          height={220}
          chartConfig={chartConfig}
          withHorizontalLines={false}
          withVerticalLines={false}
          withShadow={false}
          withDots={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
        />
      )}
      {error && (
        <NotFound title='An error has occurred. Cannot retrieve data' />
      )}
      <FilterList
        interval={interval}
        intervals={intervals}
        onPress={(interval: string) => setInterval(interval)}
      />
    </View>
  );
};

export default HistoryChart;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 18,
    width: "100%",
  },
  chartLayout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

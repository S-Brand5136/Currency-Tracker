import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import useAxios from "../../hooks/useAxios";
import useIntervalFilter from "../../hooks/useIntervalFilter";
import FilterList from "./FilterList";

type Props = {
  id: string;
};

// Dummy data
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 99, 245, ${opacity})`,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
};

const HistoryChart = (props: Props) => {
  const screenWidth = Dimensions.get("window").width;
  const [interval, intervals, filterOnPressHandler] = useIntervalFilter();

  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: `/assets/${props.id}/history?interval=${interval}`,
    },
    "https://api.coincap.io/v2"
  );

  return (
    <View style={styles.layout}>
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
      />
      <FilterList
        interval={interval}
        intervals={intervals}
        onPress={(interval: string) => filterOnPressHandler(interval)}
      />
    </View>
  );
};

export default HistoryChart;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 18,
    width: "100%",
  },
  chartLayout: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

type Props = {};

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

  return (
    <View style={styles.layout}>
      <LineChart
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
    </View>
  );
};

export default HistoryChart;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 18,
    width: "100%",
  },
});

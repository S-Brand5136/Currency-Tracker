import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../@types/types";
import TrendingList from "../components/TrendingList";
import { CurrentTrendData, fetchMarketData } from "../api/coinCap";

export default function HomeTab({ navigation }: RootTabScreenProps<"TabOne">) {
  const [marketData, setMarketData] = useState<CurrentTrendData[]>([]);

  useEffect(() => {
    fetchMarketData((data: CurrentTrendData[]) => setMarketData([...data]));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Coins</Text>
      <TrendingList data={marketData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    marginLeft: 25,
  },
});

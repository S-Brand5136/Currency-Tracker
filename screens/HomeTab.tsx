import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../@types/types";
import TrendingList from "../components/TrendingList";
import { CurrentTrendData, fetchMarketData } from "../api/coinCap";

export default function HomeTab({ navigation }: RootTabScreenProps<"TabOne">) {
  const [marketData, setMarketData] = useState<CurrentTrendData[]>([]);

  useEffect(() => {
    fetchMarketData((response: { data: CurrentTrendData[] }) =>
      setMarketData([...response.data])
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Coins</Text>
      {marketData.length > 0 ? <TrendingList data={marketData} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Cabin-Bold",
    opacity: 0.8,
    marginLeft: 25,
    textAlign: "left",
    width: "100%",
  },
});

import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../@types/types";
import TrendingList from "../components/TrendingList";
import useAxios from "../hooks/useAxios";

export default function HomeTab({}: RootTabScreenProps<"TabOne">) {
  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: "/assets",
    },
    "https://api.coincap.io/v2"
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Coins</Text>
      {!loading && !error ? <TrendingList data={response?.data.data} /> : null}
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

import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../@types/types";
import TrendingList from "../components/TrendingList";
import useAxios from "../hooks/useAxios";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import { useEffect } from "react";
import NotFound from "../components/NotFound";

export default function HomeTab({}: RootTabScreenProps<"TabOne">) {
  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: "/assets",
    },
    "https://api.coincap.io/v2"
  );

  useEffect(() => {
    sendData();
  }, []);

  return (
    <View style={styles.container}>
      <Banner
        title='Welcome to the Market'
        message='Start tracking your favourite crypto currencies today!'
        buttonText='Search Currencies'
        color='#0063F5'
      />
      <Text darkColor='rgba(255,255,255,0.1)' style={styles.title}>
        Trending Coins
      </Text>
      {loading && <Loader size={"large"} color='rgba(0, 99, 245, 1)' />}
      {!loading && !error ? <TrendingList data={response?.data.data} /> : null}
      {error && (
        <NotFound title='An error has occurred. Cannot retrieve data' />
      )}
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
    fontSize: 22,
    fontFamily: "Cabin-Bold",
    marginLeft: 25,
    marginBottom: 8,
    textAlign: "left",
    width: "100%",
  },
});

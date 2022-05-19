import { StyleSheet } from "react-native";
import { RootTabScreenProps } from "../@types/types";
import TrendingList from "../components/TrendingList";
import useAxios from "../hooks/useAxios";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import { useEffect } from "react";
import NotFound from "../components/NotFound";
import { BoldText } from "../components/StyledText";
import { BaseView } from "../components/StyledView";

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
    <BaseView
      alignItems='center'
      justifyContent='center'
      lightColor='#F8F9FA'
      style={styles.container}
    >
      <Banner
        title='Welcome to the Market'
        message='Start tracking your favourite crypto currencies today!'
        buttonText='Search Currencies'
        color='#0063F5'
      />
      <BoldText fontSize={22} style={styles.title}>
        Trending Coins
      </BoldText>
      {loading && <Loader size={"large"} color='rgba(0, 99, 245, 1)' />}
      {!loading && !error ? <TrendingList data={response?.data.data} /> : null}
      {error && (
        <NotFound title='An error has occurred. Cannot retrieve data' />
      )}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    marginLeft: 25,
    marginBottom: 8,
    textAlign: "left",
    width: "100%",
  },
});

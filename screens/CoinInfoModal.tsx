import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../@types/types";
import useAxios from "../hooks/useAxios";
import HistoryChart from "../components/HistoryChart";

type Props = {};

const CoinInfoModal = (props: Props) => {
  const {
    params: { title, id },
  } = useRoute<RouteProp<RootStackParamList, "Modal">>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title,
      id,
    });
  }, []);

  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: `/assets/${id}/history?interval=d1`,
    },
    "https://api.coincap.io/v2"
  );

  return (
    <View style={styles.layout}>
      <Text>CoinInfoModal</Text>
    </View>
  );
};

export default CoinInfoModal;

const styles = StyleSheet.create({
  layout: {},
});

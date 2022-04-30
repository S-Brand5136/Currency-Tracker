import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../@types/types";
import ModalHeader from "../components/modal/ModalHeader";
import HistoryChart from "../components/modal/HistoryChart";
import CurrencyCard from "../components/cards/CurrencyCard";
import ModalFooter from "../components/modal/ModalFooter";
import CardButton from "../components/cards/CardButton";

const CoinInfoModal = () => {
  const {
    params: { title, id, symbol, rank, priceUsd, changePercent24Hr },
  } = useRoute<RouteProp<RootStackParamList, "Modal">>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ModalHeader title={title} symbol={symbol} />,
      id,
    });
  }, []);

  return (
    <View style={styles.layout}>
      <View style={styles.priceLayout}>
        <Text style={styles.price}>$ {Number(priceUsd).toFixed(2)}</Text>
        <Text
          style={{
            ...styles.percentChanged,
            ...{
              color: `${changePercent24Hr.charAt(0) === "-" ? "red" : "green"}`,
            },
          }}
        >
          {Number(changePercent24Hr).toFixed(2)}%
        </Text>
      </View>

      <HistoryChart id={id} />

      <CurrencyCard item={{ id, symbol, rank, priceUsd, changePercent24Hr }} />

      <CardButton onPress={() => console.log("pressed")} title='Transactions' />

      <ModalFooter />
    </View>
  );
};

export default CoinInfoModal;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  priceLayout: {
    alignItems: "baseline",
    alignContent: "flex-start",
    flexDirection: "row",
    marginTop: 2,
    paddingHorizontal: 20,
    width: "100%",
  },
  price: {
    fontSize: 22,
    fontFamily: "Cabin-Bold",
    marginRight: 15,
  },
  percentChanged: {
    fontSize: 16,
    fontFamily: "Cabin-Bold",
    opacity: 0.8,
    textAlign: "right",
  },
});

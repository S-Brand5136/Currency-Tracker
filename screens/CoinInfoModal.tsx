import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../@types/types";
import ModalHeader from "../components/modal/ModalHeader";
import HistoryChart from "../components/modal/HistoryChart";
import CurrencyCard from "../components/cards/CurrencyCard";
import ModalFooter from "../components/modal/ModalFooter";
import CardButton from "../components/buttons/CardButton";
import { BoldText } from "../components/StyledText";

const CoinInfoModal = () => {
  const {
    params: { title, id, symbol, rank, priceUsd, changePercent24Hr },
  } = useRoute<RouteProp<RootStackParamList, "HistoryModal">>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ModalHeader title={title} symbol={symbol} />,
      id,
    });
  }, []);

  const percentChangedColour = `${
    changePercent24Hr.charAt(0) === "-" ? "red" : "green"
  }`;

  return (
    <View style={styles.layout}>
      <View style={styles.priceLayout}>
        <BoldText fontSize={22} style={styles.price}>
          $ {Number(priceUsd).toFixed(2)}
        </BoldText>
        <BoldText
          fontSize={16}
          lightColor={percentChangedColour}
          darkColor={percentChangedColour}
          style={styles.percentChanged}
        >
          {Number(changePercent24Hr).toFixed(2)}%
        </BoldText>
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
    marginRight: 15,
  },
  percentChanged: {
    opacity: 0.8,
    textAlign: "right",
  },
});

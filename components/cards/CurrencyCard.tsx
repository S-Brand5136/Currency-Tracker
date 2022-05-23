import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CurrentTrendData } from "../../interfaces/CoinCap";
import { BoldText } from "../StyledText";

type Props = {
  item: CurrentTrendData;
};

const interpolateId = (id: string): string => {
  const deHyphenated = id.replace("-", " ");

  return deHyphenated
    .split(" ")
    .map((word: string) => {
      return upperCaseFirstLetter(word);
    })
    .join(" ");
};

const upperCaseFirstLetter = (str: string): string => {
  return str[0].toUpperCase() + str.substring(1);
};

const CurrencyCard = ({
  item: { id, symbol, rank, priceUsd, changePercent24Hr },
}: Props) => {
  const navigation = useNavigation();
  const title = interpolateId(id);
  const textColour = "#fff";
  const percentChangedColor = `${
    changePercent24Hr.charAt(0) === "-" ? "red" : "green"
  }`;

  return (
    <View style={styles.layout}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HistoryModal", {
            title,
            id,
            symbol,
            rank,
            priceUsd,
            changePercent24Hr,
          })
        }
        style={styles.buttonLayout}
      >
        <View style={{ flexDirection: "row" }}>
          <BoldText
            fontSize={14}
            lightColor={textColour}
            darkColor={textColour}
            style={styles.rank}
          >
            {rank}
          </BoldText>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <BoldText letterSpacing={0.5} fontSize={16}>
              {title}
            </BoldText>
            <BoldText style={styles.symbol}>{symbol}</BoldText>
          </View>
        </View>
        <View>
          <BoldText fontSize={15}>$ {Number(priceUsd).toFixed(2)}</BoldText>
          <BoldText
            lightColor={percentChangedColor}
            darkColor={percentChangedColor}
            style={styles.percentChanged}
          >
            {Number(changePercent24Hr).toFixed(2)}%
          </BoldText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  buttonLayout: {
    backgroundColor: "#fff",
    width: "95%",
    padding: 12,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rank: {
    backgroundColor: "#0063F5",
    borderRadius: 100,
    marginRight: 10,
    paddingTop: 10,
    width: 40,
    textAlign: "center",
  },
  symbol: {
    opacity: 0.8,
  },
  percentChanged: {
    opacity: 0.8,
    textAlign: "right",
  },
});

export default CurrencyCard;

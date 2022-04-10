import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CurrentTrendData } from "../interfaces/CoinCap";

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

const ListItem = ({
  item: { id, symbol, rank, priceUsd, changePercent24Hr },
}: Props) => {
  const navigation = useNavigation();
  const title = interpolateId(id);

  return (
    <View style={styles.layout}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Modal", { title, id })}
        style={styles.itemLayout}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{rank}</Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>$ {Number(priceUsd).toFixed(2)}</Text>
          <Text
            style={{
              ...styles.percentChanged,
              ...{
                color: `${
                  changePercent24Hr.charAt(0) === "-" ? "red" : "green"
                }`,
              },
            }}
          >
            {Number(changePercent24Hr).toFixed(2)}%
          </Text>
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
  itemLayout: {
    backgroundColor: "#fff",
    width: "95%",
    padding: 12,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rank: {
    backgroundColor: "blue",
    color: "white",
    marginRight: 10,
    paddingTop: 10,
    width: 40,
    textAlign: "center",
    borderRadius: 100,
    fontSize: 14,
    fontFamily: "Cabin-Bold",
  },
  title: {
    fontSize: 14,
    fontFamily: "Cabin-Bold",
    letterSpacing: 0.5,
  },
  symbol: {
    fontFamily: "Cabin-Regular",
  },
  price: {
    fontFamily: "Cabin-Bold",
  },
  percentChanged: {
    textAlign: "right",
    fontFamily: "Cabin-Bold",
  },
});

export default ListItem;

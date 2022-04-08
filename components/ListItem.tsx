import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { CurrentTrendData } from "../api/coinCap";

type Props = {
  item: CurrentTrendData;
};

const interpolateId = (id: String): String => {
  const deHyphenated = id.replace("-", " ");

  return deHyphenated
    .split(" ")
    .map((word: string) => {
      return upperCaseFirstLetter(word);
    })
    .join(" ");
};

const upperCaseFirstLetter = (str: String): String => {
  return str[0].toUpperCase() + str.substring(1);
};

const ListItem = ({
  item: { id, symbol, rank, priceUsd, changePercent24Hr },
}: Props) => {
  return (
    <View style={styles.layout}>
      <Pressable style={styles.itemLayout}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{rank}</Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Text style={styles.title}>{interpolateId(id)}</Text>
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
      </Pressable>
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
    width: "80%",
    padding: 10,
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

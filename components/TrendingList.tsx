import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CurrentTrendData } from "../interfaces/CoinCap";
import CurrenyCard from "./CurrencyCard";

type Props = {
  data: CurrentTrendData[];
};

const TrendingList = ({ data }: Props) => {
  return (
    <View style={styles.layout}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return <CurrenyCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
  },
});

export default TrendingList;

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CurrentTrendData } from "../api/coinCap";
import ListItem from "./ListItem";

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
          return <ListItem item={item} />;
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

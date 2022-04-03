import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CurrentTrendData } from "../api/coinCap";
import ListItem from "./ListItem";

type Props = {
  data: CurrentTrendData[];
};

const TrendingList = ({ data }: Props): React.ReactNode => {
  return (
    <View>
      <Text>TrendingList</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrendingList;

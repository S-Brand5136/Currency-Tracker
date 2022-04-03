import { View, Text } from "react-native";
import React from "react";
import { CurrentTrendData } from "../api/coinCap";

const ListItem = ({
  id,
  symbol,
  rank,
  supply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
}: CurrentTrendData) => {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ListItem;

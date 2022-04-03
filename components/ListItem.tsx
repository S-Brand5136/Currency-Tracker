import { View, Text } from "react-native";
import React from "react";

type Props = {
  id: string;
  symbol: string;
  rank: string;
  supply: string;
  marketCap: string;
  volumeUsd: string;
  priceUsd: string;
  changePercent: string;
  vwrap: string;
};

const ListItem = ({
  id,
  symbol,
  rank,
  supply,
  marketCap,
  volumeUsd,
  priceUsd,
}: Props): React.ReactNode => {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ListItem;

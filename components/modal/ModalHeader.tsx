import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type Props = {
  title: string;
  symbol: string;
};
const ModalHeader = (props: Props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.symbol}>({props.symbol})</Text>
      <TouchableOpacity>
        <AntDesign size={24} name='staro' />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginRight: 5,
    fontFamily: "Cabin-Regular",
  },
  symbol: {
    fontSize: 12,
    fontFamily: "Cabin-Regular",
    marginTop: 8,
    opacity: 0.6,
    marginRight: 15,
  },
});

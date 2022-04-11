import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type Props = {
  title: string;
  symbol: string;
};
const ModalHeader = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{ fontSize: 22, marginRight: 5, fontFamily: "Cabin-Regular" }}
      >
        {props.title}
      </Text>
      <Text
        style={{ fontSize: 12, marginTop: 8, opacity: 0.6, marginRight: 15 }}
      >
        ({props.symbol})
      </Text>
      <TouchableOpacity>
        <AntDesign size={24} name='staro' />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({});

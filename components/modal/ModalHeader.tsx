import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { RegularText } from "../StyledText";

type Props = {
  title: string;
  symbol: string;
};
const ModalHeader = (props: Props) => {
  return (
    <View style={styles.layout}>
      <RegularText fontSize={22} style={styles.title}>
        {props.title}
      </RegularText>
      <RegularText fontSize={12} style={styles.symbol}>
        ({props.symbol})
      </RegularText>
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
    marginRight: 5,
  },
  symbol: {
    marginTop: 8,
    opacity: 0.6,
    marginRight: 15,
  },
});

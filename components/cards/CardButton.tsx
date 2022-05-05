import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BoldText } from "../StyledText";

type Props = {
  title: string;
  onPress: Function;
};

const CardButton = (props: Props) => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <View style={styles.buttonLayout}>
          <BoldText fontSize={16}>{props.title}</BoldText>
          <MaterialIcons name='arrow-forward-ios' style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#fff",
    width: "94%",
    padding: 12,
    paddingVertical: 15,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    marginVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    textAlign: "right",
    width: "73%",
  },
});

import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BoldText } from "../StyledText";
import { BaseView } from "../StyledView";

type Props = {
  title: string;
  onPress: Function;
};

const CardButton = (props: Props) => {
  return (
    <BaseView
      justifyContent='space-between'
      alignItems='center'
      style={styles.layout}
    >
      <TouchableOpacity onPress={() => props.onPress()}>
        <BaseView flexDirection='row' alignItems='center'>
          <BoldText fontSize={16}>{props.title}</BoldText>
          <MaterialIcons name='arrow-forward-ios' style={styles.icon} />
        </BaseView>
      </TouchableOpacity>
    </BaseView>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  layout: {
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    marginVertical: 15,
    width: "94%",
    padding: 12,
    paddingVertical: 15,
  },
  icon: {
    fontSize: 20,
    textAlign: "right",
    width: "73%",
  },
});

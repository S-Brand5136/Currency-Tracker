import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { BoldText } from "../StyledText";

type Props = {
  title: string;
  themedStyle?: any;
  pressed: () => any;
};

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.layout, ...props.themedStyle }}
      onPress={props.pressed}
    >
      <BoldText
        darkColor='#fff'
        lightColor='#fff'
        fontSize={18}
        letterSpacing={0.75}
      >
        {props.title}
      </BoldText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  layout: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0063F5",
    borderRadius: 5,
    marginBottom: 15,
  },
});

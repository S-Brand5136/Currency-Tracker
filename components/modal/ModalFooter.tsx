import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BoldText } from "../StyledText";

type Props = {
  title: string;
};

const ButtonText = (props: Props) => {
  return (
    <BoldText
      darkColor='#fff'
      lightColor='#fff'
      fontSize={18}
      letterSpacing={0.75}
    >
      {props.title}
    </BoldText>
  );
};

const ModalFooter = () => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity
        style={styles.buySellButton}
        onPress={() => console.log("Buy")}
      >
        <ButtonText title='BUY' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buySellButton}
        onPress={() => console.log("Sell")}
      >
        <ButtonText title='SELL' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    padding: 12,
    position: "absolute",
    bottom: -10,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
  },
  buySellButton: {
    backgroundColor: "#0063F5",
    borderRadius: 5,
    width: "47%",
    height: "75%",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalFooter;

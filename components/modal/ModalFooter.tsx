import { View, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const ModalFooter = () => {
  return (
    <View style={styles.layout}>
      <PrimaryButton
        themedStyle={{ width: "47%", height: "75%" }}
        title={"Buy"}
        pressed={() => console.log("Buy Pressed")}
      />
      <PrimaryButton
        themedStyle={{ width: "47%", height: "75%" }}
        title={"Sell"}
        pressed={() => console.log("Sell Pressed")}
      />
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
});

export default ModalFooter;

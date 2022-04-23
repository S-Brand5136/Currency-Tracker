import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const ModalFooter = (props: Props) => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity
        style={styles.buySellButton}
        onPress={() => console.log("Buy")}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Cabin-Bold",
            fontSize: 18,
            letterSpacing: 0.75,
          }}
        >
          BUY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buySellButton}
        onPress={() => console.log("Buy")}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Cabin-Bold",
            fontSize: 18,
            letterSpacing: 0.75,
          }}
        >
          SELL
        </Text>
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

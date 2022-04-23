import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  onPress: Function;
};

const CardButton = (props: Props) => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <View style={styles.buttonLayout}>
          <Text style={styles.buttonText}>{props.title}</Text>
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
  buttonText: {
    fontFamily: "Cabin-Bold",
    fontSize: 16,
    letterSpacing: 0.75,
  },
  icon: {
    fontFamily: "Cabin-Bold",
    fontSize: 20,
    textAlign: "right",
    width: "73%",
  },
});

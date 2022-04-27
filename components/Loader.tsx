import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

type Props = {
  size: number | "small" | "large";
  color: string;
};

const Loader = (props: Props) => {
  return (
    <View style={[styles.layout, styles.horizontal]}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

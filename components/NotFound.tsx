import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NotFoundSvg from "../assets/images/notFound.svg";

type Props = {
  title: string;
};

const NotFound = (props: Props) => {
  return (
    <View style={styles.layout}>
      <NotFoundSvg height={300} width={300} />
      <Text>{props.title}</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  layout: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

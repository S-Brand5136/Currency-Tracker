import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  message: string;
  buttonText: string;
  color: string;
};

const Banner = ({ title, message, buttonText, color }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.layout, backgroundColor: color }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.buttonLayout}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  layout: {
    borderRadius: 15,
    elevation: 5,
    marginTop: 20,
    marginBottom: 25,
    padding: 20,
    width: "95%",
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Cabin-Regular",
  },
  message: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Cabin-Bold",
    marginBottom: 25,
  },
  buttonLayout: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "40%",
    height: 35,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  buttonText: {
    marginTop: 5,
    textAlign: "center",
    color: "#0063F5",
    fontFamily: "Cabin-Bold",
    fontSize: 14,
    marginBottom: 10,
  },
});

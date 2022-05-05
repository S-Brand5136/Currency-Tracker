import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { RegularText, BoldText } from "./StyledText";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  message: string;
  buttonText: string;
  color: string;
};

const Banner = ({ title, message, buttonText, color }: Props) => {
  const textColour = "#fff";
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.layout, backgroundColor: color }}>
      <RegularText lightColor={textColour} darkColor={textColour} fontSize={14}>
        {title}
      </RegularText>
      <BoldText
        lightColor={textColour}
        darkColor={textColour}
        fontSize={22}
        style={styles.message}
      >
        {message}
      </BoldText>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.buttonLayout}>
          <BoldText
            darkColor='#0063F5'
            lightColor='#0063F5'
            fontSize={14}
            style={styles.buttonText}
          >
            {buttonText}
          </BoldText>
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
  message: {
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
    marginBottom: 10,
  },
});

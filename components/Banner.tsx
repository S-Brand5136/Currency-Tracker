import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { RegularText, BoldText } from "./StyledText";
import { useNavigation } from "@react-navigation/native";

type BannerProps = {
  title: string;
  message: string;
  buttonText: string;
  color: string;
};

type ProfileBannerProps = {
  title: string;
  username: string;
  color: string;
};

export const Banner = ({ title, message, buttonText, color }: BannerProps) => {
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
            darkColor={color}
            lightColor={color}
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

export const ProfileBanner = ({
  title,
  username,
  color,
}: ProfileBannerProps) => {
  const textColour = "#fff";
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.layout, backgroundColor: color }}>
      <BoldText lightColor={textColour} darkColor={textColour} fontSize={14}>
        {title}
      </BoldText>
      <RegularText
        lightColor={textColour}
        darkColor={textColour}
        fontSize={22}
        style={styles.message}
      >
        {username}
      </RegularText>
      <View style={styles.doubleButtonLayout}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginModal")}>
          <View style={styles.doubleButton}>
            <BoldText
              darkColor={color}
              lightColor={color}
              fontSize={14}
              style={styles.buttonText}
            >
              Login
            </BoldText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterModal")}>
          <View style={styles.doubleButton}>
            <BoldText
              darkColor={color}
              lightColor={color}
              fontSize={14}
              style={styles.buttonText}
            >
              Register
            </BoldText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  doubleButtonLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  doubleButton: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 15,
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

import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BaseView } from "../StyledView";
import { BoldText, RegularText } from "../StyledText";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  symbol: string;
};

const FavouritesCard = (props: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("hello")}>
        <View style={styles.layout}>
          <View>
            <BoldText>{props.title}</BoldText>
            <RegularText>{props.symbol}</RegularText>
          </View>
          <MaterialIcons name='arrow-forward-ios' style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FavouritesCard;

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    maxHeight: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
  },
  icon: {
    fontSize: 20,
    textAlign: "right",
    width: "73%",
    color: "#0063F5",
  },
});

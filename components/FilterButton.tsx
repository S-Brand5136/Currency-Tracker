import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  selected: boolean;
  onPress: Function;
};

const FilterButton = (props: Props) => {
  const selectedStyling = props.selected
    ? {
        color: "#0063F5",
        backgroundColor: "#ecf4ff",
        borderColor: "#0063F5",
      }
    : {};

  return (
    <View>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text style={{ ...styles.title, ...selectedStyling }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  title: {
    color: "#6C757D",
    backgroundColor: "#F8F9FA",
    borderColor: "#DFE2E4",
    borderWidth: 1,
    borderRadius: 50,
    padding: 4,
    paddingHorizontal: 10,
  },
});

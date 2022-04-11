import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress: Function;
};

const FilterButton = (props: Props) => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  layout: {},
  title: {},
});

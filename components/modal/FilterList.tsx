import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import FilterButton from "./FilterButton";

type Props = {
  intervals: Array<{
    title: string;
    interval: string;
  }>;
  interval: string;
  onPress: Function;
};

const FilterList = (props: Props) => {
  return (
    <FlatList
      data={props.intervals}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={styles.layout}
      keyExtractor={(data) => data.title}
      renderItem={({ item }) => {
        return (
          <FilterButton
            title={item.title}
            selected={props.interval === item.interval}
            onPress={() => props.onPress(item.interval)}
          />
        );
      }}
    />
  );
};

export default FilterList;

const styles = StyleSheet.create({
  layout: {
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 10,
  },
});

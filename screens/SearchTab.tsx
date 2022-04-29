import { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchForm from "../components/SearchForm";

export default function SearchTab() {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string): void => {
    setSearchValue(value);
  };

  return (
    <View style={styles.layout}>
      <SearchForm
        value={searchValue}
        onChange={(value: string) => onSearch(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

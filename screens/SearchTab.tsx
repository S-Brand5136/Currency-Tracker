import { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchForm from "../components/SearchForm";

export default function SearchTab() {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (): void => {
    setSearchValue(searchValue);
  };

  return (
    <View style={styles.layout}>
      <SearchForm
        value={searchValue}
        onChange={(value: string) => setSearchValue(value)}
        onSubmit={() => onSearch()}
        onPress={() => setSearchValue("")}
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

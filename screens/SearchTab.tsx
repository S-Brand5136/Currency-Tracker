import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import SearchSvg from "../assets/images/search.svg";
import useAxios from "../hooks/useAxios";
import CurrencyCard from "../components/cards/CurrencyCard";
import { CurrentTrendData } from "../interfaces/CoinCap";

export default function SearchTab() {
  const [searchValue, setSearchValue] = useState("");
  const [dataArray, setDataArray] = useState<CurrentTrendData[]>();
  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: `/assets/${searchValue.toLowerCase()}`,
    },
    "https://api.coincap.io/v2"
  );

  const onSearch = (): void => {
    sendData();
    setSearchValue("");
  };

  useEffect(() => {
    if (response) {
      const data: CurrentTrendData[] = [response?.data.data];
      setDataArray(data);
    }
  }, [response]);

  return (
    <View style={styles.layout}>
      <SearchForm
        value={searchValue}
        onChange={(value: string) => setSearchValue(value)}
        onEndEditing={onSearch}
        onPress={() => setSearchValue("")}
      />
      {dataArray && (
        <View
          style={{
            width: "100%",
            top: 125,
            flex: 1,
          }}
        >
          <FlatList
            data={dataArray}
            showsVerticalScrollIndicator={false}
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => {
              return <CurrencyCard item={item} />;
            }}
          />
        </View>
      )}
      {!dataArray && !loading && (
        <View style={styles.layout}>
          <SearchSvg height={300} width={300} />
          <Text style={{ fontSize: 18, fontFamily: "Cabin-Bold" }}>
            Start Searching...
          </Text>
        </View>
      )}
      {loading && <Loader size={"large"} color='rgba(0, 99, 245, 1)' />}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

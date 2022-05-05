import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import SearchSvg from "../assets/images/search.svg";
import useAxios from "../hooks/useAxios";
import CurrencyCard from "../components/cards/CurrencyCard";
import { CurrentTrendData } from "../interfaces/CoinCap";
import NotFound from "../components/NotFound";
import { BoldText } from "../components/StyledText";

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
        onPress={() => {
          setSearchValue("");
          setDataArray(undefined);
        }}
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
      {!dataArray && !loading && !error && (
        <View style={styles.layout}>
          <SearchSvg height={300} width={300} />
          <BoldText fontSize={18}>Start Searching...</BoldText>
        </View>
      )}
      {loading && <Loader size={"large"} color='rgba(0, 99, 245, 1)' />}
      {error && <NotFound title='Cannot find any currencies with that name!' />}
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

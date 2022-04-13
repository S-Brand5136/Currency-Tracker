import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../@types/types";
import { MaterialIcons } from "@expo/vector-icons";
import useAxios from "../hooks/useAxios";
import ModalHeader from "../components/ModalHeader";
import HistoryChart from "../components/HistoryChart";
import useIntervalFilter from "../hooks/useIntervalFilter";
import FilterButton from "../components/FilterButton";
import ListItem from "../components/ListItem";

type Props = {
  title: string;
  symbol: string;
};

const CoinInfoModal = (props: Props) => {
  const {
    params: { title, id, symbol, rank, priceUsd, changePercent24Hr },
  } = useRoute<RouteProp<RootStackParamList, "Modal">>();
  const navigation = useNavigation();
  const [interval, intervals, filterOnPressHandler] = useIntervalFilter();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ModalHeader title={title} symbol={symbol} />,
      id,
    });
  }, []);

  const { response, loading, error, sendData } = useAxios(
    {
      method: "GET",
      url: `/assets/${id}/history?interval=${interval}`,
    },
    "https://api.coincap.io/v2"
  );

  const filterBtns = (array: any) => {
    return array.map((item: any, index: any) => {
      return (
        <FilterButton
          key={index}
          title={item.title}
          selected={interval === item.interval}
          onPress={() => filterOnPressHandler(item.interval)}
        />
      );
    });
  };

  return (
    <View style={styles.layout}>
      <View style={styles.priceLayout}>
        <Text style={styles.price}>$ {Number(priceUsd).toFixed(2)}</Text>
        <Text
          style={{
            ...styles.percentChanged,
            ...{
              color: `${changePercent24Hr.charAt(0) === "-" ? "red" : "green"}`,
            },
          }}
        >
          {Number(changePercent24Hr).toFixed(2)}%
        </Text>
      </View>
      <HistoryChart />
      <View style={styles.filterButtonList}>{filterBtns(intervals)}</View>
      <View style={{ marginTop: 25, marginRight: 5 }}>
        <ListItem item={{ id, symbol, rank, priceUsd, changePercent24Hr }} />
      </View>

      <View style={styles.transactions}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Cabin-Bold",
                fontSize: 16,
                letterSpacing: 0.75,
              }}
            >
              Transactions
            </Text>
            <MaterialIcons
              name='arrow-forward-ios'
              style={{
                fontFamily: "Cabin-Bold",
                fontSize: 20,
                textAlign: "right",
                width: "73%",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buyAndSell}>
        <TouchableOpacity
          style={styles.buySellButton}
          onPress={() => console.log("Buy")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Cabin-Bold",
              fontSize: 18,
              letterSpacing: 0.75,
            }}
          >
            BUY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buySellButton}
          onPress={() => console.log("Buy")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Cabin-Bold",
              fontSize: 18,
              letterSpacing: 0.75,
            }}
          >
            SELL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoinInfoModal;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  priceLayout: {
    alignItems: "baseline",
    alignContent: "flex-start",
    flexDirection: "row",
    marginTop: 2,
    paddingHorizontal: 20,
    width: "100%",
  },
  price: {
    fontSize: 22,
    fontFamily: "Cabin-Bold",
    marginRight: 15,
  },
  percentChanged: {
    fontSize: 16,
    fontFamily: "Cabin-Bold",
    opacity: 0.8,
    textAlign: "right",
  },
  filterButtonList: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "90%",
  },
  transactions: {
    backgroundColor: "#fff",
    width: "94%",
    padding: 12,
    paddingVertical: 15,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    marginVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buyAndSell: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    padding: 12,
    position: "absolute",
    bottom: -10,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-around",
  },
  buySellButton: {
    backgroundColor: "#0063F5",
    borderRadius: 5,
    width: "47%",
    height: "75%",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../@types/types";

type Props = {};

const CoinInfoModal = (props: Props) => {
  const navigation = useNavigation();
  const {
    params: { title, id },
  } = useRoute<RouteProp<RootStackParamList, "Modal">>();

  useEffect(() => {
    navigation.setOptions({
      title,
      id,
    });
  }, [navigation]);

  return (
    <View>
      <Text>CoinInfoModal</Text>
    </View>
  );
};

export default CoinInfoModal;

const styles = StyleSheet.create({});

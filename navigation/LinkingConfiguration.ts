/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../@types/types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          Search: {
            screens: {
              SearchScreen: "two",
            },
          },
        },
      },
      HistoryModal: "modal",
      LoginModal: "modal",
      RegisterModal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;

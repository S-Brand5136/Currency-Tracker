import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../@types/types";
import { TabBarIcon } from "../components/TabBarIcon";
import HomeTab from "../screens/HomeTab";
import SearchTab from "../screens/SearchTab";
import Colors from "../constants/Colors";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme() || "light";

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={HomeTab}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        })}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchTab}
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

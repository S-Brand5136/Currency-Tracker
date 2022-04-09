import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/types";
import { BottomTabNavigator } from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import CoinInfoModal from "../screens/CoinInfoModal";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name='Modal' component={CoinInfoModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

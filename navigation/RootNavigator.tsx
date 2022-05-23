import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/types";
import { BottomTabNavigator } from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import CoinInfoModal from "../screens/CoinInfoModal";
import LoginModal from "../screens/LoginModal";
import RegisterModal from "../screens/RegisterModal";

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
        <Stack.Screen
          name='HistoryModal'
          options={{ headerShadowVisible: false }}
          component={CoinInfoModal}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name='LoginModal'
          options={{ headerShadowVisible: false }}
          component={LoginModal}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name='RegisterModal'
          options={{ headerShadowVisible: false }}
          component={RegisterModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

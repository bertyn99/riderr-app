import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteGroupConfig,
} from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import MapScreen from "../../screens/MapScreen";
import AuthScreen from "./AuthNavigation";
import { ComponentType } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import tw from "../../utils/tailwind";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import SplashScreen from "../../screens/SplashScreen";
import React from "react";
import TravelToScreen from "../../screens/user/TravelToScreen";
import NavigateCard from "../NavigateCard";
import NavigationCard from "../NavigationCard";
import TripsConfirmScreen from "../../screens/user/TripsConfirmScreen";
import WaitingDriverScreen from "../../screens/commons/WaitingDriverScreen";
import TripsScreen from "../../screens/user/TripsScreen";
import MyProfileDrawer from "./drawer";
const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useSelector((state: RootState) => state.user);
  const driver = useSelector((state: RootState) => state.driver);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          {user.access_token == null &&
          user.refresh_token == null &&
          driver.access_token == null &&
          driver.refresh_token == null ? (
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TravelToScreen"
                component={TravelToScreen}
                options={{
                  headerTitle: (props) => <NavigationCard />,
                }}
              />
              <Stack.Screen
                name="TripsConfirmScreen"
                component={TripsConfirmScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WaitingDriverScreen"
                component={WaitingDriverScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TripsScreen"
                component={TripsScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;

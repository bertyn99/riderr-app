import { View, Text } from "react-native";
import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteGroupConfig,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../../screens/auth/IndexScreen";
import SignInScreen from "../../screens/auth/SignInScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import { AuthStackParams } from "./types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "../../screens/auth/ResetPasswordScreen";

const AuthNavigation = () => {
  const Auth = createNativeStackNavigator<AuthStackParams>();
  return (
    <Auth.Navigator initialRouteName="IndexScreen">
      <Auth.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigation;

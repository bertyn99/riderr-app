import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteGroupConfig,
  CompositeNavigationProp,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  AuthScreen: NavigatorScreenParams<AuthStackParams>;
  Profile: { me: undefined };
};

export type AuthStackParams = {
  UserOrDriverScreen: undefined;
  IndexScreen: undefined;
  SignInScreen: { type: "user" | "driver" };
  SignUpScreen: { type: "user" | "driver" };
  ConfirmEmailScreen: { type: "user" | "driver" };
  ForgotPasswordScreen: { type: "user" | "driver" };
  ResetPasswordScreen: { type: "user" | "driver" };
};

//auth

export type authIndexScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "SignInScreen" | "SignUpScreen"
>;

export type authSignInScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<
    AuthStackParams,
    "ForgotPasswordScreen" | "SignUpScreen"
  >,
  NativeStackNavigationProp<RootStackParamList, "HomeScreen">
>;

export type authSignUpScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<
    AuthStackParams,
    "ForgotPasswordScreen" | "SignInScreen"
  >,
  NativeStackNavigationProp<RootStackParamList, "HomeScreen">
>;

export type authForgotScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "SignInScreen" | "ResetPasswordScreen"
>;

export type authResetScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

//route props
export type IndexScreenRouteProp = RouteProp<AuthStackParams, "IndexScreen">;

export type SignInScreenRouteProp = RouteProp<AuthStackParams, "SignInScreen">;
export type SignUpScreenRouteProp = RouteProp<AuthStackParams, "SignUpScreen">;
export type ForgotPasswordScreenRouteProp = RouteProp<
  AuthStackParams,
  "ForgotPasswordScreen"
>;
export type ResetPasswordScreenRouteProp = RouteProp<
  AuthStackParams,
  "ResetPasswordScreen"
>;

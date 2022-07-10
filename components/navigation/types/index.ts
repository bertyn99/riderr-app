import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteGroupConfig,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  AuthScreen: NavigatorScreenParams<AuthStackParams>;
  Profile: { me: undefined };
};

export type AuthStackParams = {
  navigate(): void;
  IndexScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ConfirmEmailScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
};

//auth

export type authIndexScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "SignInScreen" | "SignUpScreen"
>;

export type authSignInScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "ForgotPasswordScreen" | "SignUpScreen"
>;

export type authSignUpScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "ForgotPasswordScreen" | "SignInScreen"
>;

export type authForgotScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "SignInScreen" | "ResetPasswordScreen"
>;

export type authResetScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

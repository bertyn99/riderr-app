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

export type authSignInScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<
    AuthStackParams,
    "ForgotPasswordScreen" | "SignUpScreen"
  >,
  NativeStackNavigationProp<RootStackParamList, "HomeScreen">
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

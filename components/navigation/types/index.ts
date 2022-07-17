import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteGroupConfig,
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  MapDriverScreen: undefined;
  AuthScreen: NavigatorScreenParams<AuthStackParams>;
  Profile: { me: undefined };
};

export type AuthStackParams = {
  UserOrDriverScreen: undefined;
  IndexScreen: typeClient;
  SignInScreen: typeClient;
  SignUpScreen: typeClient;
  ConfirmEmailScreen: typeClient;
  ForgotPasswordScreen: typeClient;
  ResetPasswordScreen: typeClient;
};

//auth

export type authIndexScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "SignInScreen" | "SignUpScreen"
>;

export type userOrDriverScreenProp = NativeStackNavigationProp<
  AuthStackParams,
  "IndexScreen"
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

export type authResetScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

//route props

export type typeClient = {
  type: "user" | "driver";
};
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

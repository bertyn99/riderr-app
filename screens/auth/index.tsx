import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import tw from "../../utils/tailwind";
import HomeScreen from "./IndexScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import ConfirmEmailScreen from "./ConfirmEmailScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";

const Index = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-zinc-300 `}>
      {/* <HomeScreen></HomeScreen> */}
      {/*  <SignInScreen></SignInScreen> */}
      {/*    <SignUpScreen></SignUpScreen> */}
      {/*     <ConfirmEmailScreen></ConfirmEmailScreen> */}
      {/*  <ForgotPasswordScreen></ForgotPasswordScreen> */}
      <ResetPasswordScreen></ResetPasswordScreen>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});

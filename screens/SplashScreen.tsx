import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "../utils/tailwind";

const SplashScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>SplashScreen Loading...</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

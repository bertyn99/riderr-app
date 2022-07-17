import { View, Text } from "react-native";
import React from "react";
import tw from "../utils/tailwind";

const SplashScreen = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>SplashScreen Loading...</Text>
    </View>
  );
};

export default SplashScreen;

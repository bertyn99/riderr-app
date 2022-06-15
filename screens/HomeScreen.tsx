import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView
      style={tw`h-full bg-blue-400 flex justify-center items-center`}
    >
      <Text style={tw`text-white text-2xl font-semibold`}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import NavOptions from "../components/NavOptions";
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`h-full  `}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions></NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

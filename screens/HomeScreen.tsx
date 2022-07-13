import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import NavOptions from "../components/NavOptions";
import GooglePlacesInput from "../components/GooglePlacesInput";
import Map from "../components/Map";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View>
        <View style={tw`h-1/2`}>
          <Map></Map>
        </View>
        <View style={tw`h-1/2`}>
          <GooglePlacesInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

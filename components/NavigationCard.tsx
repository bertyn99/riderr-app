import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import BasicButton from "./basic/BasicButton";
import { Entypo, Ionicons } from "@expo/vector-icons";
import GooglePlacesInput from "./GooglePlacesInput";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import tw from "../utils/tailwind";

const NavigationCard = () => {
  const origin = useSelector((state: RootState) => state.nav.origin);
  return (
    <View>
      <View style={tw`flex-1   mb-4`}>
        <Text style={tw` text-lg font-bold mb-5 mr-2`}>Enter destination</Text>
        <View
          style={tw`flex-row
        `}
        >
          <View style={tw`justify-between py-4 pl-1`}>
            <Ionicons name="locate" size={24} color="black" />
            <Entypo name="location-pin" size={24} color="black" />
          </View>
          <View style={tw`w-full max-w-4/5`}>
            <GooglePlacesInput
              position={"origin"}
              placeholder={"Ici de partir"}
            ></GooglePlacesInput>
            <GooglePlacesInput
              position={"destination"}
              placeholder="Where you go?"
            ></GooglePlacesInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NavigationCard;

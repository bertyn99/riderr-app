import { View, Text } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import { Entypo, Ionicons } from "@expo/vector-icons";

const OriginToDestination = ({
  origin,
  destination,
}: {
  origin: string;
  destination: string;
}) => {
  return (
    <View style={tw`flex-row h-26 p-2 border-b border-neutral-300`}>
      <View style={tw`justify-between   pt-1 mx-2`}>
        <Ionicons name="locate" size={20} color="black" />
        <Entypo name="location-pin" size={20} color="black" />
      </View>
      <View style={tw` w-full justify-between   max-w-64 `}>
        <Text
          numberOfLines={1}
          style={tw`text-md font-bold bg-cyan-600/16 p-2 mb-5 bg`}
        >
          {origin}
        </Text>
        <Text
          numberOfLines={1}
          style={tw`text-md font-bold bg-cyan-600/16  p-2  `}
        >
          {destination}
        </Text>
      </View>
    </View>
  );
};

export default OriginToDestination;

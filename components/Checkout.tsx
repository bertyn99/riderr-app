import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "../utils/tailwind";

export default function Checkout({ price }: { price: number }) {
  return (
    <>
      <View style={tw`flex-row  p-4 border-b border-neutral-300`}>
        <MaterialCommunityIcons name="cash-multiple" size={24} color="black" />
        <Text>Cash</Text>
      </View>
      <View style={tw`flex-row  p-4 border-b border-neutral-300`}>
        <Text>Price: {price} fdj</Text>
      </View>
    </>
  );
}

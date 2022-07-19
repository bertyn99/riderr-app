import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GooglePlacesInput from "./GooglePlacesInput";
import tw from "../utils/tailwind";
import { Transport } from "../types/trips.type";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const NavigateCard = () => {
  const [transportSelected, setTransportSelected] =
    React.useState<Transport | null>(null);
  return (
    <SafeAreaView style={tw`bg-white h-full  flex-1 items-center `}>
      <Text style={tw`text-center py-1 text-xl`}>Good Morning, Sonny </Text>
      <View style={tw`items-center flex-row`}>
        <TouchableOpacity
          style={tw`items-center rounded-md border border-slate-200 m-1 px-2`}
          onPress={() => setTransportSelected(Transport.Car)}
        >
          <AntDesign name="car" size={32} color="black" />
          <Text style={tw`text-center py-1 text-xl mx-4`}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`items-center rounded-md border border-slate-200 m-1 `}
          onPress={() => setTransportSelected(Transport.Bike)}
        >
          <MaterialCommunityIcons name="motorbike" size={32} color="black" />
          <Text style={tw`text-center py-1 text-xl mx-4`}>Bedjai</Text>
        </TouchableOpacity>
      </View>
      <View
        style={tw`border border-gray-400 rounded-md w-3/4 flex-row items-center justify-center`}
      >
        <GooglePlacesInput position="origin" placeholder="WHere youy from ?" />
        <TouchableOpacity
          style={tw` py-1 mx-2`}
          onPress={() => console.warn("test")}
        >
          <Ionicons name="locate" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text>
        {transportSelected}

        {}
      </Text>
    </SafeAreaView>
  );
};

export default NavigateCard;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import { AntDesign } from "@expo/vector-icons";

const TravelToScreen = () => {
  return (
    <View>
      <View>
        <TouchableOpacity style={tw`flex-row p-2`}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={tw`text-start text-lg font-bold mb-5 mr-2`}>Home</Text>
        </TouchableOpacity>
      </View>
      <Text>TravelToScreen</Text>
    </View>
  );
};

export default TravelToScreen;

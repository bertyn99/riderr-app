import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
const Hscreen = () => {
  const navigate = useNavigation();
  return (
    <View style={tw`items-center justify-between`}>
      <Image
        source={Logo}
        style={tw`w-3/4 h-4/5 max-w-lg`}
        resizeMode="cover"
      />

      <View style={tw`w-3/4 flex-row justify-between items-center`}>
        <TouchableOpacity
          onPress={() => console.log("first") /* navigate.navigate() */}
        >
          <Text style={tw`text-center text-xl font-bold`}>Sign In</Text>
        </TouchableOpacity>
        <Text style={tw`text-center text-md font-bold`}>or</Text>
        <TouchableOpacity
          onPress={() => console.log("first") /* navigate.navigate() */}
        >
          <Text style={tw`text-center text-xl font-bold`}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hscreen;

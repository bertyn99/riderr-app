import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "../../utils/tailwind";
import { userOrDriverScreenProp } from "../../components/navigation/types";
const UserOrDriverScreen = () => {
  const navigation = useNavigation<userOrDriverScreenProp>();
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-3xl font-bold text-lime-800 mb-16`}>
        Are you a User or a Driver ?
      </Text>
      <View style={tw`w-3/4 flex-row justify-between items-center`}>
        <TouchableOpacity
          style={tw`p-8 bg-lime-700 text-white rounded-md`}
          onPress={() => navigation.navigate("IndexScreen", { type: "user" })}
        >
          <FontAwesome5 name="users" size={32} color="white" />
          <Text style={tw`text-center text-xl text-white font-bold`}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-8 bg-lime-700 text-white rounded-md items-center`}
          onPress={() => navigation.navigate("IndexScreen", { type: "driver" })}
        >
          <AntDesign name="car" size={32} color="white" />
          <Text style={tw`text-center text-xl text-white font-bold`}>
            Driver
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserOrDriverScreen;

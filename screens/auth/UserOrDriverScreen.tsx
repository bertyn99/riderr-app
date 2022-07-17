import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const UserOrDriverScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.navigate("IndexScreen", { type: "user" })}
      >
        <FontAwesome5 name="users" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigation.navigate("IndexScreen", { type: "driver" })}
      >
        <AntDesign name="car" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default UserOrDriverScreen;

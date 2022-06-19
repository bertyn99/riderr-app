import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
type Props = {};

type mapScreenProp = StackNavigationProp<RootStackParamList, "MapScreen">;
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "143",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];
const NavOptions = (props: Props) => {
  const navigation = useNavigation<mapScreenProp>();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2  pb-8 pt-4 bg-gray-200 m-2 w-40 rounded flex items-center justify-center`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              style={{ height: 120, width: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <AntDesign
              name="arrowright"
              size={16}
              style={tw`p-2 bg-black rounded-full w-8 text-white`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

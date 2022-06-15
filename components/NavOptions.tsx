import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "123",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];
const NavOptions = (props: Props) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2  pb-8 pt-4 bg-gray-200 m-2 w-40 rounded flex items-center justify-center`}
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

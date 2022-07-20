import { View, Text } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
const TripCommunication = ({
  to,
  tel,
  name,
}: {
  to: "driver" | "user";
  tel: string;
  name: string;
}) => {
  return (
    <View style={tw`flex-1 bg-white p-5`}>
      <View style={tw``}>
        <Text style={tw`text-xl font-semibold`}>Your {to}</Text>
        <View>
          <View style={tw`flex-row justify-between w-full mt-3`}>
            <View style={tw`flex-row `}>
              <Ionicons name="person-circle-outline" size={32} color="black" />
              <Text style={tw`text-xl font-semibold capitalize  ml-2`}>
                {name}
              </Text>
            </View>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={26}
              ratingColor="black"
              ratingBackgroundColor="white"
              readonly={true}
            ></Rating>
          </View>
          <Text style={tw`text-xl w-full  ml-10 mb-4`}>
            is Coming In 10 min
          </Text>
        </View>
      </View>
      <View style={tw`flex-row mt-2`}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={32}
          color="black"
        />
      </View>
      <View style={tw`flex-row mt-2`}>
        <Ionicons name="call-sharp" size={32} color="black" />
        <Text style={tw`text-xl w-full capitalize  font-semibold ml-2`}>
          Appelez-votre {to}
        </Text>
      </View>
    </View>
  );
};

export default TripCommunication;

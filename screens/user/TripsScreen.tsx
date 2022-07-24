import { View, Text } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../../components/basic/BasicButton";
import { deleteTrips } from "../../store/slice/tripsSlice";
import { useNavigation } from "@react-navigation/native";
import { TripsNavigationProp } from "../../components/navigation/types";
const TripsScreen = () => {
  const trips = useSelector((state: RootState) => state.trips);
  const navigation = useNavigation<TripsNavigationProp>();
  const dispatch = useDispatch();
  const cleanTrips = () => {
    dispatch(deleteTrips());
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`p-4`}>
        <View style={tw`mt-5`}>
          <Text style={tw`text-xl font-semibold capitalize`}>
            What do your think about your trips
          </Text>
          <View style={tw`mt-5 flex-row justify-center `}>
            <Ionicons name="person-circle-outline" size={36} color="black" />
            <Text style={tw`text-xl font-semibold capitalize  ml-2`}>
              Driver {trips.userId}
            </Text>
          </View>
        </View>
        <View>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={36}
            ratingColor="black"
            ratingBackgroundColor="white"
          ></Rating>
        </View>
        <View>
          <BasicButton text={"Go to Home"} fn={cleanTrips}></BasicButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripsScreen;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "../../utils/tailwind";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TravelToScreenNavigationProp } from "../../components/navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { Point } from "../../types/trips.type";
import * as Location from "expo-location";
import { setTrips } from "../../store/slice/tripsSlice";
import { RootState } from "../../store";
const TravelToScreen = () => {
  const [time, setTime] = React.useState<Date | undefined>(new Date());
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation<TravelToScreenNavigationProp>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [location, setLocation] = useState<Point | null>(null);
  const origin = useSelector((state: RootState) => state.nav.origin);
  const destination = useSelector((state: RootState) => state.nav.destination);
  const dispatch = useDispatch();
  const trips = useSelector((state: RootState) => state.trips);
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setTime(currentDate);
  };

  const validTrip = () => {
    console.log(trips);
    dispatch(
      setTrips({
        origin: origin,
        destination: destination,
        price: 5,
        timeDeparture: time?.toJSON() || null,
        rating: null,
        createdAt: null,
      })
    );

    navigation.navigate("TripsConfirmScreen");
  };
  return (
    <View>
      <View style={tw`h-1/2`}>
        <TouchableOpacity style={tw`p-3 mb-1`}>
          <View style={tw`flex-row border-b border-neutral-300`}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={tw`text-start text-lg font-bold  ml-2`}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-3 mb-1`}>
          <View style={tw`flex-row border-b border-neutral-300`}>
            <MaterialIcons name="work-outline" size={24} color="black" />
            <Text style={tw`text-start text-lg  font-bold  ml-2`}>Work</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-3 mb-1`}>
          <View style={tw`flex-row border-b border-neutral-300`}>
            <MaterialIcons name="work-outline" size={24} color="black" />
            <Text style={tw`text-start text-lg font-bold  ml-2`}>
              Last destination
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`h-1/2 border-t border-neutral-500 `}>
        <View
          style={tw`flex-row justify-center  items-center p-2 border-b border-neutral-300  `}
        >
          <AntDesign name="clockcircleo" size={24} color="black" />
          <Text style={tw`text-center  text-lg font-bold  `}>
            Hour of Departure
          </Text>
        </View>

        <View style={tw` justify-center  items-center p-2 `}>
          <TouchableOpacity
            style={tw`w-3/4 bg-cyan-600/16 p-2 m-2`}
            onPress={() => setShow(true)}
          >
            <Text style={tw`text-center  text-xl font-bold `}>
              {time?.toLocaleTimeString()}
            </Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              value={time!}
              mode={"time"}
              is24Hour={true}
              onChange={onChange}
            ></DateTimePicker>
          )}

          <TouchableOpacity
            style={tw` w-3/4 flex-row bg-cyan-600/16 p-2 m-2`}
            onPress={() => setShow(true)}
          >
            <Ionicons name="md-pin-outline" size={24} color="black" />
            <Text style={tw`text-center  text-lg font-semibold `}>
              Choose destination on map
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={validTrip}>
            <Feather name="check-circle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TravelToScreen;

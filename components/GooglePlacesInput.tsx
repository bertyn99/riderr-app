import React, { useEffect, useRef, useState } from "react";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../store/slice/navSlice";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "./navigation/types";
import tw from "../utils/tailwind";
import { RootState } from "../store";
const GooglePlacesInput = ({
  position,
  placeholder = "",
}: {
  position: "origin" | "destination";
  placeholder: string;
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const origin = useSelector((state: RootState) => state.nav.origin);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (position === "origin" && origin?.description) {
      setInput(origin?.description);
    }
  }, []);

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      styles={{
        container: {
          flex: 1,
          backgroundColor: tw.color("neutral-300"),
          margin: 4,
        },
        textInput: {
          backgroundColor: tw.color("neutral-300"),
          fontSize: 18,
          color: "black",
        },
        listView: { backgroundColor: tw.color("neutral-300") },
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true

        if (details !== null) {
          if (position == "origin") {
            const { lat, lng } = details.geometry.location;
            dispatch(
              setOrigin({
                lat: lat,
                lng: lng,
                description: data.description,
              })
            );
            navigation.navigate("TravelToScreen");
          }
          if (position == "destination") {
            console.log(details);
            dispatch(
              setDestination({
                ...details!.geometry!.location,
                description: data.description,
              })
            );
            setInput(data.description);
          }
        }
      }}
      query={{
        key: process.env.GOOGLE_MAPS_APIKEY || GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
      /*    currentLocation={position == "origin" ? true : false} */
      /*     navigator.geolocation */
      fetchDetails={true}
      isRowScrollable={true}
      textInputProps={{
        onChangeText: (txt) => setInput(txt),
        value: input,
      }}
      enablePoweredByContainer={false}
      minLength={2}
      debounce={400}
    />
  );
};

export default GooglePlacesInput;

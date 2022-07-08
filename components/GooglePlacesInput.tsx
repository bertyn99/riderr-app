import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../store/slice/navSlice";
import { View } from "react-native";
const GooglePlacesInput = () => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Where From?"
      styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
      nearbyPlacesAPI="GooglePlacesSearch"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        dispatch(
          setOrigin({
            location: details!.geometry!.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
      enablePoweredByContainer={false}
      minLength={2}
      debounce={400}
    />
  );
};

export default GooglePlacesInput;

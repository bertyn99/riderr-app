import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import tw from "../utils/tailwind";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin } from "../store/slice/navSlice";
const Map = () => {
  const origin = useSelector(selectOrigin);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      /*  dispatch(setOrigin(origin)); */
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <>
      {location && location.coords && (
        <MapView
          mapType="mutedStandard"
          style={tw`flex-1`}
          initialRegion={{
            latitude: location!.coords.latitude,
            longitude: location!.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location!.coords.latitude,
              longitude: location!.coords.longitude,
            }}
            title="Origin"
            identifier="origin"
          ></Marker>
        </MapView>
      )}
    </>
  );
};

export default Map;

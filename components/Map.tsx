import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import tw from "../utils/tailwind";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setOrigin } from "../store/slice/navSlice";
import { Point } from "../types/trips.type";
const Map = () => {
  const origin = useSelector(selectOrigin);
  const [location, setLocation] = useState<Point | null>(null);

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
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      let regionName = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });
      setLocation({
        lat: latitude,
        lng: longitude,
        description: regionName[0].streetNumber + " " + regionName[0].street,
      });
      if (location) {
        dispatch(
          setOrigin({
            lat: location.lat,
            lng: location.lng,
            description: location.description,
          })
        );
      }

      console.log(location);
    })();
  }, []);

  return (
    <>
      {location && location.lat && location.lng && (
        <MapView
          mapType="mutedStandard"
          style={tw`flex-1`}
          initialRegion={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
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

import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import tw from "../../utils/tailwind";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { Point } from "../../types/trips.type";
import MapViewDirections from "react-native-maps-directions";
import { Ionicons } from "@expo/vector-icons";
import TripCommunication from "../../components/TripCommunication";
const voiture: Point = {
  lat: 47.21758,
  lng: -1.55745,
  description: "Voiture",
};

const WaintingTripsScreen = () => {
  const trips = useSelector((state: RootState) => state.trips);
  const mapRef = useRef<MapView>(null);
  useEffect(() => {
    if (mapRef)
      mapRef?.current?.fitToSuppliedMarkers(["origin", "driver"], {
        edgePadding: { top: 80, left: 80, right: 80, bottom: 80 },
      });
  }, []);

  return (
    <View>
      <View style={tw`h-4/6`}>
        <MapView
          ref={mapRef}
          mapType="mutedStandard"
          style={tw`flex-1`}
          initialRegion={{
            latitude: trips?.origin!.lat,
            longitude: trips?.origin!.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: trips?.origin!.lat,
              longitude: trips?.origin!.lng,
            }}
            title="Origin"
            description={trips?.origin?.description}
            identifier="origin"
          />
          {voiture && (
            <Marker
              coordinate={{
                latitude: voiture.lat,
                longitude: voiture.lng,
              }}
              title="Driver"
              description={voiture.description}
              identifier="driver"
            >
              <Ionicons name="car-sport" size={24} color="black" />
            </Marker>
          )}
          {trips.origin && voiture && (
            <MapViewDirections
              origin={{
                latitude: trips?.origin?.lat,
                longitude: trips.origin?.lng,
              }}
              destination={{
                latitude: voiture.lat,
                longitude: voiture.lng,
              }}
              apikey={GOOGLE_MAPS_APIKEY}
              mode="DRIVING"
              strokeWidth={3}
              strokeColor="green"
            />
          )}
        </MapView>
      </View>
      <View style={tw`h-2/6`}>
        <TripCommunication
          to="driver"
          name="robert"
          tel={""}
        ></TripCommunication>
      </View>
    </View>
  );
};

export default WaintingTripsScreen;

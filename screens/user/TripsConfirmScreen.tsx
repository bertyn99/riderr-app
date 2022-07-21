import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import tw from "../../utils/tailwind";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import {
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ModalSearchDriver from "../../components/basic/modalSearchDriver";
import OriginToDestination from "../../components/OriginToDestination";
import Checkout from "../../components/Checkout";
import { TripsConfirmScreenNavigationProp } from "../../components/navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
const TripsConfirmScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const trips = useSelector((state: RootState) => state.trips);
  const navigation = useNavigation<TripsConfirmScreenNavigationProp>();
  const mapRef = useRef<MapView>(null);
  console.log(trips);
  useEffect(() => {
    if (mapRef)
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 80, left: 80, right: 80, bottom: 80 },
      });
  }, []);

  const handleTrip = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("WaitingDriverScreen");
    }, 3800);
  };
  return (
    <SafeAreaView>
      <View style={tw`h-3/5`}>
        {trips.origin && (
          <>
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
                  latitude: trips?.origin?.lat,
                  longitude: trips?.origin?.lng,
                }}
                title="Origin"
                description={trips?.origin?.description}
                identifier="origin"
              />
              {trips.destination && (
                <Marker
                  coordinate={{
                    latitude: trips?.destination!.lat,
                    longitude: trips?.destination!.lng,
                  }}
                  title="Destination"
                  description={trips?.destination?.description}
                  identifier="destination"
                />
              )}

              {trips.origin && trips.destination && (
                <MapViewDirections
                  origin={{
                    latitude: trips?.origin?.lat,
                    longitude: trips.origin?.lng,
                  }}
                  destination={{
                    latitude: trips?.destination.lat,
                    longitude: trips.destination.lng,
                  }}
                  apikey={process.env.GOOGLE_MAPS_APIKEY || GOOGLE_MAPS_APIKEY}
                  mode="DRIVING"
                  strokeWidth={3}
                  strokeColor="green"
                />
              )}
            </MapView>
          </>
        )}
      </View>
      <View style={tw`h-2/5`}>
        <OriginToDestination
          origin={trips.origin?.description || ""}
          destination={trips.destination?.description || ""}
        />
        <Checkout price={trips.price || 8}></Checkout>
        <View style={tw`  p-2 items-center `}>
          <TouchableOpacity onPress={handleTrip}>
            <Feather name="check-circle" size={34} color="black" />
          </TouchableOpacity>
          <ModalSearchDriver
            show={modalVisible}
            setShow={setModalVisible}
          ></ModalSearchDriver>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripsConfirmScreen;

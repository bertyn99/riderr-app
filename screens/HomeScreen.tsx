import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "../utils/tailwind";
import NavOptions from "../components/NavOptions";
import GooglePlacesInput from "../components/GooglePlacesInput";
import Map from "../components/Map";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "../store";
import { logOut } from "../store/slice/userSlice";
import { useNavigation } from "@react-navigation/native";
import NavigateCard from "../components/NavigateCard";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { logOutDriver } from "../store/slice/driverSlice";
import ModalRide from "../components/ModalRide";
type Props = {};

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const driver = useSelector((state: RootState) => state.driver);
  const dispatch = useDispatch();

  console.log(user);
  console.log(driver);
  const [active, setActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const activeDriver = () => {
    setActive(true);
    setTimeout(() => {
      setShow(true);
    }, 3000);
  };
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`h-3/5 relative`}>
        <TouchableOpacity
          style={tw`
        absolute left-7 top-16 h-10 w-10 bg-white rounded-full items-center justify-center z-10`}
          onPress={() => /* navigation.openDrawer() */ console.log("object")}
        >
          <Entypo name="menu" size={24} color="blue" />
        </TouchableOpacity>
        <Map></Map>
      </View>
      <View style={tw`h-2/5 `}>
        {user.access_token ? (
          <>
            <Text style={tw`font-bold text-xl`}>Welcome {user.lastName}</Text>
            <NavigateCard></NavigateCard>
            <Button
              title="Logout"
              onPress={async () => {
                console.log(user);
                dispatch(logOut());
                await persistor.purge().then(() => {
                  console.log("purged");
                });
              }}
            >
              purge
            </Button>
          </>
        ) : (
          <></>
        )}
        {driver.access_token ? (
          <View style={tw`flex-1 justify-between`}>
            <Text style={tw`font-bold text-xl text-center `}>
              Welcome driver {driver.lastName}
            </Text>
            {!active ? (
              <View style={tw`my-2 items-center`}>
                <Text style={tw`font-bold text-xl`}>
                  Do you want to receive request?
                </Text>
                <TouchableOpacity onPress={activeDriver}>
                  <Feather name="check-circle" size={38} color="black" />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Text style={tw` text-center font-bold text-xl`}>
                  Waitng for a ride ....
                </Text>
                <ModalRide show={show} setShow={setShow}></ModalRide>
              </>
            )}
            <View style={tw`flex-row justify-center`}>
              <FontAwesome name="money" size={24} color="black" />
              <Text style={tw` text-lg`}>{1000}fdj </Text>
              <TouchableOpacity
                style={tw`ml-3 `}
                onPress={() => console.warn("va recharge")}
              >
                <Text style={tw`font-bold text-lg`}>or to recharge</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Logout"
              onPress={async () => {
                dispatch(logOutDriver());
                await persistor.purge().then(() => {
                  console.log("purged");
                });
              }}
            >
              purge
            </Button>
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

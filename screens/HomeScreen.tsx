import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import NavOptions from "../components/NavOptions";
import GooglePlacesInput from "../components/GooglePlacesInput";
import Map from "../components/Map";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "../store";
import { logOut } from "../store/slice/userSlice";
import { useNavigation } from "@react-navigation/native";
import NavigateCard from "../components/NavigateCard";
import { Entypo } from "@expo/vector-icons";
type Props = {};

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const driver = useSelector((state: RootState) => state.driver);
  const dispatch = useDispatch();

  /*   const navigation = useNavigation<>(); */

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`h-1/2 relative`}>
        <TouchableOpacity
          style={tw`
        absolute left-7 top-16 h-10 w-10 bg-white rounded-full items-center justify-center z-10`}
          onPress={() => /* navigation.openDrawer() */ console.log("object")}
        >
          <Entypo name="menu" size={24} color="blue" />
        </TouchableOpacity>
        <Map></Map>
      </View>
      <View style={tw`h-1/2 `}>
        {user.lastName ? (
          <Text>{user.lastName}</Text>
        ) : (
          <Text>{user.lastName}</Text>
        )}
        <NavigateCard></NavigateCard>

        {/*  <Button
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
          </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

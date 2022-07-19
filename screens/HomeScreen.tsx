import { View, Text, SafeAreaView, Image, Button } from "react-native";
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
type Props = {};

const HomeScreen = (props: Props) => {
  const user = useSelector((state: RootState) => state.user);
  const driver = useSelector((state: RootState) => state.driver);
  const dispatch = useDispatch();
  /*   const navigation = useNavigation<>(); */
  console.log(user);
  return (
    <SafeAreaView style={tw`h-full`}>
      <View>
        <View style={tw`h-1/2`}>
          <Map></Map>
        </View>
        <View style={tw`h-1/2 `}>
          {user.lastName ? (
            <Text>{user.lastName}</Text>
          ) : (
            <Text>{user.lastName}</Text>
          )}
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { View, Text, Modal } from "react-native";
import React from "react";
import tw from "../utils/tailwind";
import OriginToDestination from "./OriginToDestination";
import * as Progress from "react-native-progress";
import Checkout from "./Checkout";
const ModalRide = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (v: boolean) => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(!show);
      }}
    >
      <View style={tw`flex-1 justify-center items-center mt-4 p-4`}>
        <View
          style={tw`h-64 w-full shadow items-center bg-white m-4 p-8 rounded`}
        >
          <OriginToDestination
            origin={"3 allée de la sarthe,Orvault"}
            destination={"haluchere Batignole"}
          ></OriginToDestination>

          <Checkout price={800}></Checkout>
          {/*  <Progress.Circle size={80} indeterminate={true} /> */}
        </View>
      </View>
    </Modal>
  );
};

export default ModalRide;

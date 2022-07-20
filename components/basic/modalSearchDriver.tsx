import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import * as Progress from "react-native-progress";
const ModalSearchDriver = ({
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
          style={tw`h-46 w-full shadow items-center bg-white m-4 p-8 rounded`}
        >
          <Progress.Circle size={80} indeterminate={true} />
          <Text style={tw`text-center mt-2 text-lg`}>Research Driver near</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSearchDriver;

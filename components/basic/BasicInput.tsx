import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";

const BasicInput = ({
  placeholder,
  value,
  setValue,
  hide = false,
}: {
  placeholder: string;
  value: string;
  hide?: boolean;
  setValue: (value: string) => void;
}) => {
  return (
    <View
      style={tw`bg-white w-full border border-white  rounded-md p-1.5 my-2 `}
    >
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={hide}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

export default BasicInput;

import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
const BasicInput = ({
  placeholder,
  control,
  rules = {},
  name = placeholder,
  hide = false,
}: {
  placeholder: string;
  rules?: any;
  name?: string;
  hide?: boolean;
  control: any;
}) => {
  return (
    <View
      style={tw`bg-white w-full border border-white  rounded-md p-1.5 my-2 `}
    >
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <TextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry={hide}
              onBlur={onBlur}
              placeholder={placeholder}
            ></TextInput>
          );
        }}
      />
    </View>
  );
};

export default BasicInput;

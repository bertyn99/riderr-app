import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = () => {
  const [code, setCode] = React.useState("");
  const handleCode = (text: string) => {};
  const { control, handleSubmit } = useForm();
  return (
    <View style={tw`items-center justify-between pt-8`}>
      <Text style={tw`text-3xl font-bold text-cyan-600`}>
        Confirm Your Email
      </Text>
      <View style={tw`w-3/4 items-center justify-between mt-14`}>
        <Text style={tw`w-full  font-bold mt-2`}>
          Please enter the code you received in your email.
        </Text>
        <BasicInput placeholder="Code" control={control}></BasicInput>

        <BasicButton text="Confirm" fn={() => handleCode}></BasicButton>
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;

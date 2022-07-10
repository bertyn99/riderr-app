import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState("");

  const handleCode = (text: string) => {};
  return (
    <View style={tw`items-center justify-between pt-8`}>
      <Text style={tw`text-3xl font-bold text-cyan-600`}>
        Reset Your password
      </Text>
      <View style={tw`w-3/4 items-center justify-between mt-14`}>
        <Text style={tw`w-full  font-bold mt-2`}>Email</Text>
        <BasicInput
          placeholder="Email "
          value={email}
          setValue={setEmail}
        ></BasicInput>

        <BasicButton text="Confirm" fn={() => handleCode}></BasicButton>
        <BasicButton
          text="Back to SignIn"
          type="tertiary"
          fn={() => handleCode}
        ></BasicButton>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

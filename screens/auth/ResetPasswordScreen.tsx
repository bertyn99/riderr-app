import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import { useNavigation } from "@react-navigation/native";
import { authResetScreenProp } from "../../components/navigation/types";
const ResetPasswordScreen = () => {
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const navigation = useNavigation<authResetScreenProp>();
  const handleCode = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={tw`items-center justify-between pt-8`}>
      <Text style={tw`text-3xl font-bold text-cyan-600`}>
        Reset Your password
      </Text>
      <View style={tw`w-3/4 items-center justify-between mt-14`}>
        <Text style={tw`w-full  font-bold mt-2`}>Password</Text>
        <BasicInput
          placeholder="Old Password "
          value={password}
          setValue={setPassword}
        ></BasicInput>

        <Text style={tw`w-full  font-bold mt-2`}>New Password</Text>
        <BasicInput
          placeholder="New password"
          value={newPassword}
          setValue={setNewPassword}
        ></BasicInput>
        <BasicButton text="Confirm" fn={handleCode}></BasicButton>
        <BasicButton
          text="Back to SignIn"
          type="tertiary"
          fn={() => handleCode}
        ></BasicButton>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

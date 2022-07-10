import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import { useNavigation } from "@react-navigation/native";
import { authForgotScreenProp } from "../../components/navigation/types";
const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation<authForgotScreenProp>();
  const handleCode = () => {
    navigation.navigate("ResetPasswordScreen");
  };
  return (
    <View style={tw`items-center justify-between pt-8`}>
      <Text style={tw`text-3xl font-bold text-cyan-600`}>
        Forgot Your password
      </Text>
      <View style={tw`w-3/4 items-center justify-between mt-14`}>
        <Text style={tw`w-full  font-bold mt-2`}>Email</Text>
        <BasicInput
          placeholder="Email "
          value={email}
          setValue={setEmail}
        ></BasicInput>

        <BasicButton text="Confirm" fn={handleCode}></BasicButton>
        <BasicButton
          text="Back to SignIn"
          type="tertiary"
          fn={() => navigation.navigate("SignInScreen")}
        ></BasicButton>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

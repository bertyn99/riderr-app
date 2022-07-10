import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
import { useNavigation } from "@react-navigation/native";
import { authSignUpScreenProp } from "../../components/navigation/types";
import { useForm } from "react-hook-form";
const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const navigation = useNavigation<authSignUpScreenProp>();
  const { control, handleSubmit } = useForm();
  const handleSignIn = () => {
    console.warn("Sign In");
  };

  const gotToSIgnUp = () => {
    console.warn("Go to Sign Up");
  };

  const onTermsOfUsePressed = () => {};
  const onPrivacyPolicyPressed = () => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`items-center justify-between pt-5`}>
        <Text style={tw`text-3xl font-bold text-cyan-600`}>
          Create a account
        </Text>
        <View style={tw`w-3/4 items-center justify-between`}>
          <BasicInput placeholder="Email" control={control}></BasicInput>
          <BasicInput placeholder="First Name" control={control}></BasicInput>
          <BasicInput placeholder="Last Name" control={control}></BasicInput>
          <BasicInput
            placeholder="Password"
            control={control}
            name="Password"
            hide={true}
          ></BasicInput>
          <BasicInput
            placeholder="Password"
            control={control}
            hide={true}
          ></BasicInput>
          <Text style={tw` font-semibold mt-2`}>
            MapScreenBy registrering, you confirm that you accept our
            <Text style={tw` text-lime-800 `} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{" "}
            and
            <Text style={tw` text-lime-800 `} onPress={onPrivacyPolicyPressed}>
              {" "}
              Privacy Policy
            </Text>
          </Text>
          <BasicButton text="Inscription" fn={() => handleSignIn}></BasicButton>
          <SocialButton></SocialButton>
          <BasicButton
            text="have you account? Sign In"
            type="tertiary"
            fn={() => navigation.navigate("SignInScreen")}
          ></BasicButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

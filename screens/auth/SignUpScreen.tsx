import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
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
          <BasicInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          ></BasicInput>
          <BasicInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
          ></BasicInput>
          <BasicInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
          ></BasicInput>
          <BasicInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            hide={true}
          ></BasicInput>
          <BasicInput
            placeholder="Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
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
            fn={() => console.warn("forgot password")}
          ></BasicButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

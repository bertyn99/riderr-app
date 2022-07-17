import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
import { useNavigation } from "@react-navigation/native";
import {
  authSignUpScreenProp,
  SignUpScreenRouteProp,
} from "../../components/navigation/types";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../services/api/authSlice";
import { ISignUp } from "../../types/auth.type";
import { useRoute } from "@react-navigation/native";

import { BACK_URL } from "@env";
const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const navigation = useNavigation<authSignUpScreenProp>();
  const { control, handleSubmit } = useForm();

  const route = useRoute<SignUpScreenRouteProp>();
  const { type } = route.params;
  const handleSignIn = async (data: any) => {
    try {
      console.log(data);
      const user = await register(data).unwrap();
      console.warn(user);
      if (user) {
        navigation.navigate("HomeScreen");
      }
    } catch (err) {
      console.log(err);
    }
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
            name="email"
            control={control}
          ></BasicInput>
          <BasicInput
            placeholder="First Name"
            name="firstName"
            control={control}
          ></BasicInput>
          <BasicInput
            placeholder="Last Name"
            name="lastName"
            control={control}
          ></BasicInput>
          <BasicInput
            placeholder="Password"
            control={control}
            name="password"
            hide={true}
          ></BasicInput>
          <BasicInput
            placeholder="Telephone"
            control={control}
            name="tel"
          ></BasicInput>
          {/*         <BasicInput
            placeholder="Password"
            control={control}
            hide={true}
          ></BasicInput> */}
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
          <BasicButton
            text="Inscription"
            fn={handleSubmit(handleSignIn)}
          ></BasicButton>
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

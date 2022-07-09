import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.warn("Sign In");
  };

  const gotToSIgnUp = () => {
    console.warn("Go to Sign Up");
  };
  return (
    <View style={tw`items-center justify-between`}>
      <Image
        source={Logo}
        style={tw`w-3/4 h-1/3 max-w-lg`}
        resizeMode="contain"
      />
      <View style={tw`w-3/4 items-center justify-between`}>
        <BasicInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        ></BasicInput>
        <BasicInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          hide={true}
        ></BasicInput>

        <BasicButton text="Connexion" fn={() => handleSignIn}></BasicButton>
        <BasicButton
          text="Forgot password?"
          type="tertiary"
          fn={() => console.log("forgot password")}
        ></BasicButton>

        <SocialButton></SocialButton>
        <BasicButton
          text="Dont have a account? Sign Up"
          type="secondary"
          fn={() => gotToSIgnUp}
        ></BasicButton>
      </View>
    </View>
  );
};

export default SignInScreen;

import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.warn("Sign In");
  };
  const handleGoogleSignIn = () => {
    console.warn("Google Sign In");
  };

  const handleFacebookSignIn = () => {
    console.warn("Facebook Sign In");
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

        <BasicButton
          text="Sign In with Google"
          bg="#FAE9EA"
          txC="#DD4D46"
          fn={() => handleGoogleSignIn}
        ></BasicButton>
        <BasicButton
          text="Sign In with Facebook"
          bg="#E7EAF4"
          txC="#4765A9"
          fn={() => handleFacebookSignIn}
        ></BasicButton>
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

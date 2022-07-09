import { View, Text } from "react-native";
import React from "react";
import BasicButton from "./basic/BasicButton";

const SocialButton = () => {
  const handleGoogleSignIn = () => {
    console.warn("Google Sign In");
  };

  const handleFacebookSignIn = () => {
    console.warn("Facebook Sign In");
  };
  return (
    <>
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
    </>
  );
};

export default SocialButton;

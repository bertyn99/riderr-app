import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
import { useNavigation } from "@react-navigation/native";
import { authSignInScreenProp } from "../../components/navigation/types";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../services/api/authSlice";
import { ISignIn } from "../../types/auth.type";

const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation<authSignInScreenProp>();
  const [login, { isLoading }] = useLoginMutation();
  const { control, handleSubmit } = useForm();
  const handleSignIn = async (data: any) => {
    try {
      console.log(data);
      const user = await login(data).unwrap();
      console.warn(user);
      if (user) {
        navigation.navigate("HomeScreen");
      }
    } catch (err) {
      console.log(err);
    }
    navigation.navigate("HomeScreen");
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
          control={control}
          name="email"
        ></BasicInput>
        <BasicInput
          placeholder="Password"
          control={control}
          name="password"
          hide={true}
        ></BasicInput>

        <BasicButton
          text="Connexion"
          fn={handleSubmit(handleSignIn)}
        ></BasicButton>
        <BasicButton
          text="Forgot password?"
          type="tertiary"
          fn={() => navigation.navigate("ForgotPasswordScreen")}
        ></BasicButton>

        <SocialButton></SocialButton>
        <BasicButton
          text="Dont have a account? Sign Up"
          type="secondary"
          fn={() => navigation.navigate("SignUpScreen")}
        ></BasicButton>
      </View>
    </View>
  );
};

export default SignInScreen;

import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "../../assets/logo_rider.png";
import tw from "../../utils/tailwind";
import BasicInput from "../../components/basic/BasicInput";
import BasicButton from "../../components/basic/BasicButton";
import SocialButton from "../../components/socialButton";
import { useNavigation } from "@react-navigation/native";
import {
  authSignInScreenProp,
  SignInScreenRouteProp,
} from "../../components/navigation/types";
import { useForm } from "react-hook-form";
import {
  useLoginDriverMutation,
  useLoginMutation,
} from "../../services/api/authSlice";
import { ISignIn } from "../../types/auth.type";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/userSlice";
import { RootState } from "../../store";
import { setDriver } from "../../store/slice/driverSlice";
import { useRoute } from "@react-navigation/native";

const SignInScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<authSignInScreenProp>();
  const [login, { isLoading }] = useLoginMutation();
  const [loginDriver] = useLoginDriverMutation();
  const { control, handleSubmit } = useForm();
  const { params } = useRoute<SignInScreenRouteProp>();
  const { type } = params;
  const userState = useSelector((state: RootState) => state.user);
  const handleSignIn = async (data: any) => {
    if (type == "user") {
      try {
        console.log("ici");
        const user = await login(data).unwrap();
        console.log("ici promise reslut");
        console.warn(user);
        if (user) {
          dispatch(setUser(user));
          /*   navigation.navigate("HomeScreen"); */

          console.log(userState);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const driver = await loginDriver(data).unwrap();
        console.warn(driver);
        if (driver) {
          dispatch(setDriver(driver));
          /*   navigation.navigate("HomeScreen"); */
        }
      } catch (err) {
        console.log(err);
      }
    }
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

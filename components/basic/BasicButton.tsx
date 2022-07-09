import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../utils/tailwind";

const BasicButton = ({
  text,
  fn,
  type = "primary",
  bg = null,
  txC = null,
}: {
  text: string;
  fn: () => void;
  type?: "primary" | "secondary" | "tertiary";
  bg?: string | null;
  txC?: string | null;
}) => {
  const bgColor = {
    primary: "bg-cyan-600",
    secondary: "bg-lime-700",
    tertiary: "bg-zinc-300",
  };
  const txtColor = {
    primary: "text-white",
    secondary: "text-white",
    tertiary: "text-lime-800",
  };

  return (
    <TouchableOpacity
      style={tw.style(
        "w-full rounded-full items-center p-2 my-2",
        bg ? { backgroundColor: bg } : bgColor[type]
      )}
      onPress={fn}
    >
      <Text
        style={tw.style(
          "text-xl  font-bold",
          txC ? { color: txC } : txtColor[type]
        )}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BasicButton;

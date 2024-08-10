import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Loading = ({ props }) => {
  return (
    <View className="flex w-full h-screen flex-1 justify-center items-center bg-white/10">
      <Text className="text-neutral-700 font-psemibold my-3">
        Please wait...
      </Text>
      <ActivityIndicator size={hp(15)} color={"#f59e0b"} {...props} />
    </View>
  );
};

export default Loading;

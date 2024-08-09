import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const MealInfo = ({ title, subtitle, icon }) => {
  return (
    <View className="flex rounded-full bg-amber-300 p-2 justify-center">
      <View
        style={{ width: hp(6.5), height: hp(6.5) }}
        className="bg-white rounded-full flex items-center justify-center"
      >
        {icon}
      </View>
      <View className="flex items-center py-2 space-y-1">
        <Text
          className="font-pbold text-neutral-700"
        >
          {title}
        </Text>
        <Text
          className="font-pmedium text-neutral-700"
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default MealInfo;

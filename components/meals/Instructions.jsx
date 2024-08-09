import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Instructions = ({ meal }) => {
  return (
    <View className="space-y-6 mt-4">
      <Text className="font-pbold flex-1 text-neutral-700">Instructions</Text>
      <View className="space-y-2 ml-3">
        <Text style={{ fontSize: hp(1.9) }} className="font-pregular text-neutral-700">
          {meal.strInstructions}
        </Text>
      </View>
    </View>
  );
};

export default Instructions;

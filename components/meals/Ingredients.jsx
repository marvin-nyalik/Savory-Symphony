import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Ingredients = ({ ingredientsIdx, meal }) => {
  return (
    <View className="space-y-6 mt-4">
      <Text className="font-pbold flex-1 text-neutral-700">Ingredients</Text>
      <View className="space-y-2 ml-3">
        {ingredientsIdx(meal).map((i) => {
          return (
            <View key={i} className="flex-row space-x-4">
              <View
                style={{ width: hp(3), height: hp(3) }}
                className="bg-amber-300 rounded-full"
              />
              <View className="flex-row justify-between space-x-2">
                <Text className="font-pextrabold text-neutral-900">
                  {meal[`strMeasure${i}`]}
                </Text>
                <Text className="font-pmedium text-neutral-700">
                  {meal[`strIngredient${i}`]}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Ingredients;

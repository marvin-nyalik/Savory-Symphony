import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import Loading from "../../components/Loading";
import axios from "axios";
import MealInfo from "../../components/meals/MealInfo";
import Ingredients from "../../components/meals/Ingredients";
import Instructions from "../../components/meals/Instructions";
import Video from "../../components/meals/Video";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const index = () => {
  const { id } = useLocalSearchParams();
  const [meal, setMeal] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(true);

  const getMeal = async (id) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response && response.data) {
        setMeal(response.data.meals[0]);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setLoading(true);
    getMeal(id);
    setLoading(false);
  }, [id]);

  const ingredientsIdx = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  return (
    <ScrollView className="flex-1 mx-2" showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : meal ? (
        <View className="mt-1">
          <View className="flex-row justify-center">
            <Image
              source={{ uri: meal.strMealThumb }}
              style={{ width: wp(99), height: hp(50), borderRadius: 53 }}
              className="rounded-3xl pt-3"
            />
          </View>

          <Animated.View
            entering={FadeIn.delay(200).duration(1000)}
            className="min-w-[90%] flex-row absolute justify-between items-center pt-14"
          >
            <TouchableOpacity
              className="p-2 rounded-full ml-5 bg-white"
              onPress={() => router.back()}
            >
              <ChevronLeftIcon
                size={hp(3.5)}
                strokeWidth={4.5}
                color="#fbbf24"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 rounded-full ml-5 bg-white"
              onPress={() => setIsFavourite(!isFavourite)}
            >
              <HeartIcon
                size={hp(3.5)}
                strokeWidth={4.5}
                color={isFavourite ? "red" : "gray"}
                className="mr-5"
              />
            </TouchableOpacity>
          </Animated.View>

          {/* name and area */}
          <Animated.View
            entering={FadeInDown.duration(300).springify().damping(15)}
            className="px-4 flex justify-between space-y-4 pt-8 mb-2"
          >
            <View className="space-y-2">
              <Text className="font-pbold text-neutral-700 flex-1">
                {meal.strMeal}
              </Text>

              <Text className="font-pmedium text-neutral-700 flex-1">
                {meal.strArea}
              </Text>
            </View>
          </Animated.View>

          {/* misc */}
          <Animated.View
            entering={FadeInDown.delay(100)
              .duration(700)
              .springify()
              .damping(15)}
            className="flex-row justify-around"
          >
            <MealInfo
              title={35}
              subtitle={"Mins"}
              icon={
                <ClockIcon color={"#525252"} strokeWidth={2.5} size={hp(4)} />
              }
            />
            <MealInfo
              title={3}
              subtitle={"Dishes"}
              icon={
                <UsersIcon color={"#525252"} strokeWidth={2.5} size={hp(4)} />
              }
            />
            <MealInfo
              title={103}
              subtitle={"Cals"}
              icon={
                <FireIcon color={"#525252"} strokeWidth={2.5} size={hp(4)} />
              }
            />
            <MealInfo
              title={"Dif"}
              subtitle={"Easy"}
              icon={
                <Square3Stack3DIcon
                  color={"#525252"}
                  strokeWidth={2.5}
                  size={hp(4)}
                />
              }
            />
          </Animated.View>

          {/* ingredients */}
          <Animated.View
            entering={FadeInDown.delay(200)
              .duration(700)
              .springify()
              .damping(15)}
          >
            <Ingredients ingredientsIdx={ingredientsIdx} meal={meal} />
          </Animated.View>

          {/* instructions */}
          <Animated.View
            entering={FadeInDown.delay(300)
              .duration(700)
              .springify()
              .damping(15)}
          >
            <Instructions meal={meal} />
          </Animated.View>

          {/* Video */}
          <Animated.View
            entering={FadeInDown.delay(400)
              .duration(700)
              .springify()
              .damping(15)}
          >
            {meal.strYoutube && <Video meal={meal} />}
          </Animated.View>
        </View>
      ) : (
        <Text>Nothing to show</Text>
      )}
    </ScrollView>
  );
};

export default index;

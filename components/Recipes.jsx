import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Image } from 'expo-image';
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const RecipeCard = ({ item, index }) => {
  let isEven = index % 2 == 0;
  let isThird = index % 3 === 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 7,
          paddingRight: isEven ? 7 : 0,
        }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => router.push(`/recipe-details/${item.idMeal}`)}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: "100%",
            height: isThird ? hp(20) : hp(35),
            borderRadius: 35,
          }}
          className="bg-black/5"
        />
        <Text
          style={{ fontSize: hp(1.5) }}
          className="font-pmedium ml-2 text-neutral-600"
          numberOfLines={1}
        >
          {item.strMeal}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Recipes = ({ categories, recipes }) => {
  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-psemibold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        {categories.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" className="mt-16" color={'#f59e0b'} />
          </View>
        ) : (
          <MasonryList
            data={recipes}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <RecipeCard item={item} index={index} />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadNext(ITEM_CNT)}
          />
        )}
      </View>
    </View>
  );
};

export default Recipes;

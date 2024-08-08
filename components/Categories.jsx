import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import useFetch from "../hooks/useFetch";

const Categories = ({ categories, activeCategory, handleCategoryChange }) => {
  const { loading, error } = useFetch();

  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        className="space-x-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {loading ? (
          <View className='flex-1 items-center justify-center'>
            <ActivityIndicator color={"gray"} size={24} />
          </View>
        ) : error ? (
          <Text className="font-pregular">Something went wrong</Text>
        ) : categories ? (
          categories.map((cat) => {
            let isActive = cat.strCategory === activeCategory;
            let activeBtnClass = isActive ? "bg-amber-400" : "bg-black/10";

            return (
              <TouchableOpacity
                key={cat.idCategory}
                className="flex items-center space-y-1"
                onPress={() => handleCategoryChange(cat.strCategory)}
              >
                <View className={`rounded-full p-[6px] ${activeBtnClass}`}>
                  <Image
                    source={{ uri: cat.strCategoryThumb }}
                    style={{ width: hp(6), height: hp(6) }}
                    className="rounded-full"
                  />
                </View>
                <Text
                  className="text-neutral-600 font-pregular"
                  style={{ fontSize: hp(1.4) }}
                >
                  {cat.strCategory}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>No categories available</Text>
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

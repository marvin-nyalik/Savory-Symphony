import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState} from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import images from "../constants/images";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import Categories from "../components/Categories";

const HOME = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        className="space-y-6"
      >
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={images.user}
            className="rounded-full"
            resizeMode="contain"
            style={{ width: hp(7), height: hp(7) }}
          />
          <BellIcon size={hp(4)} color="grey" />
        </View>

        {/* Punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-500 font-pmedium"
          >
            Hello, Alleagy
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3) }}
              className="text-neutral-600 font-psemibold"
            >
              Make your own food
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3) }}
            className="text-neutral-600 font-psemibold"
          >
            Stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/* Search */}
        <View className="mx-4 bg-black/5 p-[6px] items-center flex-row rounded-full">
          <TextInput
            placeholder="Search any recipe.."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-pthin mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </View>
        </View>
        {/* categories */}
        <View>
          <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HOME;

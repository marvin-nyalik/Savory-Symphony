import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import images from "../constants/images";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import Categories from "../components/Categories";
import Recipes from "../components/Recipes";
import axios from "axios";
import { router } from "expo-router";

const HOME = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data.meals) {
        setRecipes(response.data.meals);
      }
    } catch (error) {
      throw error;
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/categories.php`
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setRecipes([]);
    getRecipes(category);
  };

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

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
            Stay at <Text className="text-amber-400">Home</Text>
          </Text>
        </View>

        {/* Search */}
        <View className="mx-4 bg-black/5 p-[6px] items-center flex-row rounded-full">
          <TextInput
            placeholder="Search any recipe.."
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-pthin mb-1 pl-3 tracking-wider"
            onChangeText={(text) => setQuery(text)}
            value={query}
          />
          <TouchableOpacity
            className="bg-white rounded-full p-3"
            onPress={() => {
              const trimmedQuery = query.trim();
              if (trimmedQuery) {
                router.push(`/recipe-details/${trimmedQuery}`);
              }
            }}
          >
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
        {/* categories */}
        <View>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </View>

        {/* Recipes */}
        <View>
          <Recipes categories={categories} recipes={recipes} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HOME;

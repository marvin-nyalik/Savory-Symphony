import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView className="flex-1 mx-4" showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" />
      <Text>index: {id}</Text>
    </ScrollView>
  );
};

export default index;

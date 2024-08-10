import { Text, View, Image } from "react-native";
import images from "../constants/images";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Welcome() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(4))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(4.5))),
      350
    );

    setTimeout(() => {
      router.push(`/home`);
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <Image
            source={images.logo}
            style={{ width: hp(25), height: hp(25) }}
            className="rounded-full"
            resizeMode="contain"
          />
        </Animated.View>
      </Animated.View>
      <View className="space-y-2 items-center">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-pbold text-white tracking-widest"
        >
          Cook Smart
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="font-psemibold tracking-widest text-white"
        >
          A smart chef, A smart recipe !
        </Text>
      </View>
    </View>
  );
}

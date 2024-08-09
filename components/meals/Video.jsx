import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import YoutubeIframe from "react-native-youtube-iframe";

const Video = ({ meal }) => {

  const getYoutubeVideoId = (link) => {
    const regex = /[?&]v=([^&]+)/;
    const match = link.match(regex);
    if (match && match[1]) return match[1];
    return null;
  };

  return (
    <View className="space-y-6 mt-4">
      <Text className="font-pbold flex-1 text-neutral-700">Recipe Video</Text>
      <View className="space-y-2 ml-3">
        <YoutubeIframe
          videoId={getYoutubeVideoId(meal.strYoutube)}
          height={hp(30)}
        />
      </View>
    </View>
  );
};

export default Video;

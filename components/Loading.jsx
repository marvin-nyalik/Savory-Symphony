import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Loading = ({props}) => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <ActivityIndicator size={hp(4.5)} color={'gray'} {...props}/>
    </View>
  )
}

export default Loading
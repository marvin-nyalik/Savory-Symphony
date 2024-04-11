import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-black h-screen w-full mx-auto">
      <View className='w-90'>
        <Text className='text-white'>Home Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';

const MainNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Details" component={DetailsScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  )
}

export default MainNavigator;

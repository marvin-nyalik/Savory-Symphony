import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
           />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          />
        <Tab.Screen 
          name="Detailse" 
          component={DetailScreen}
         />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options = {{
            tabBarIcon: ({ color }) => 
            (<MaterialCommunityIcons name="home" size={26} color={color}/>),
            tabBarBadge: '2',
            tabBarLabel: 'Home',
          }} />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => 
            (<MaterialCommunityIcons name="account-circle" color={color} size={26}/>)
          }} />
        <Tab.Screen 
          name="Detailse" 
          component={DetailScreen}
          options={{
            tabBarIcon: ({ color }) => 
            (<MaterialCommunityIcons color={color} name='cog' size={26}/>),
            tabBarBadge: '!',
            tabBarLabel: 'Ghai'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
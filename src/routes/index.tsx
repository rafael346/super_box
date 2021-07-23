import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';

export function Routes(){
  const Tab = createBottomTabNavigator();
  return(
   <NavigationContainer>
    <Tab.Navigator>
     <Tab.Screen
       name="Home"
       component={Home}
       options={{
         tabBarIcon: (({focused})=> (
          <Entypo name="home" size={24} color={ focused ? 'blue' : '#c2c2c2'} />
         ))
       }}
     />
     <Tab.Screen
       name=
       "Favoritos"
       component={Favorites}
       options={{
        tabBarIcon: (({focused})=> (
         <Entypo name="star" size={24} color={ focused ? 'blue' : '#c2c2c2'} />
        ))
      }}
     />
   </Tab.Navigator>
   </NavigationContainer>
  )
}

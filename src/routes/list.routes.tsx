import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { ProductDetails } from '../screens/ProductDetails'

const {Navigator, Screen} = createStackNavigator();


export function ListRoutes(){
  return(
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='ProductDetails'
        component={ProductDetails}
      />
      <Screen 
        name='Favorites'
        component={Favorites}
      />

    </Navigator>
  )
}
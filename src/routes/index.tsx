import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {ListRoutes} from './list.routes'

export function Routes(){
  return(
    <NavigationContainer>
      <ListRoutes /> 
    </NavigationContainer>
  )
}

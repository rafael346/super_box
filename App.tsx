import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

import  {ProductContextProvider} from './src/context/Context'
export default function App() {
  return (
    <>
      <StatusBar
        
      />
      <ProductContextProvider>
      <Routes />
      </ProductContextProvider>
    </>
  );
}


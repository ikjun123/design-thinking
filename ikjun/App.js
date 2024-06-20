// App.js
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { CartProvider } from './context/CartContext';

LogBox.ignoreAllLogs();

export default function App() {
  console.disableYellowBox = true;

  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}


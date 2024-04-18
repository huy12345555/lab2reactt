import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { PaperProvider } from 'react-native-paper'
import Contacts from './src/components/Contacts';
import Routes  from './src/components/Routes';
import Store from './src/components/Store';
import { Provider } from 'react-redux';
export default function App(){
    return(
   <Routes/>
    )
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

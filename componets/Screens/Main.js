import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './HomeScreen'

const Drawer=createDrawerNavigator()

export default function Main() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen"  component={HomeScreen} />
    </Drawer.Navigator>
  )
}
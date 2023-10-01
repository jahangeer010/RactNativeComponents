import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from "@react-navigation/native"
import Main from '../Screens/Main';
import Home from '../Screens/Home';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetail from '../Screens/ProductDetail';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import WishList from '../Screens/WishList'
const Stack=createNativeStackNavigator()

const Appnaivgator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="WishList" component={WishList} options={{headerShown:false}}/>

        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnaivgator
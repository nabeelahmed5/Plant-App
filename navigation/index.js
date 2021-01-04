import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';


import Welcome from '../screens/Welcome';
//import Login from './screens/Login';
//import Explore from './screens/Explore';
//import Browse from './screens/Browse';
//import Settings from './screens/Settings';
//import Product from './screens/Product';

import { theme } from "../constants";

const screens = createStackNavigator ({
  Welcome,
  //Login,
  //Explore,
  //Browse,
  //Settings,
  //Product,
}, {
 defaultNavigationOPtion: {
  headerStyle: {},
  headerBackImage: <Image />,
  headerBackTitle: null,
  headerLeftContainerStyle: {},
  headerRightContainerStyle: {},
 }
});

export default createAppContainer(screens);

import React from 'react';
import {NavigationContainer, TabActionHelpers} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Movies from '../screens/MovieScreen';
import Favorites from '../screens/FavoriteScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from './data';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import AccountScreen from '../screens/AccountDetailsScreen';
import AddScreen from '../screens/AddScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const BottomTabNavigation = () => {
    
  };

  export default BottomTabNavigation;
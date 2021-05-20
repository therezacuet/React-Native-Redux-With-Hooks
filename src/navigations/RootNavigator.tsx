import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
const BottomTab = () => {
  return (
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="add-circle" color={color} size={50} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={LoginScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

interface StackRouterProps {}

const Stack = createStackNavigator<RootStackParamList>();
const StackRouter: React.FC<StackRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SPLASH">
        <Stack.Screen options={{headerShown: false}} name="SPLASH" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="HOME" component={BottomTab} />
        <Stack.Screen options={{headerShown: false}} name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="DETAILS" options={{headerShown: true}} component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
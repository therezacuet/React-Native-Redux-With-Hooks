import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Movies from '../screens/Movie';
import Favorites from '../screens/Favorite';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from './data';
import MovieDetailsScreen from '../screens/MovieDetails';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
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
      </Tab.Navigator>
  );
};

interface StackRouterProps {}

const Stack = createStackNavigator<RootStackParamList>();
const StackRouter: React.FC<StackRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={RootNavigator} />
        <Stack.Screen name="DETAILS" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
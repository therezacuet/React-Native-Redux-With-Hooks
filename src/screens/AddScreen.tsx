
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamList } from '../navigations/data';
import styles from '../styles/MovieDetailsStyle';



interface AddScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'ADD'>;
  route: RouteProp<RootStackParamList, 'ADD'>;
}

const AddScreen: React.FC<AddScreenProps> = (props) => {

  React.useEffect(() => {
    return () => {
      console.log('page is destroyed');
    };
  }, []);

  return (
    
    <View style={styles.container}>
        <Text>Add</Text>
    </View>
  );
};

export default AddScreen;
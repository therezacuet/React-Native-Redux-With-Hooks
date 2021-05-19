
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamList } from '../navigations/data';
import styles from '../styles/MovieDetailsStyle';



interface NotificationScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'NOTIFICATION'>;
  route: RouteProp<RootStackParamList, 'NOTIFICATION'>;
}

const NotificationScreen: React.FC<NotificationScreenProps> = (props) => {

  React.useEffect(() => {
    return () => {
      console.log('page is destroyed');
    };
  }, []);

  return (
    
    <View style={styles.container}>
        <Text>Acount Details</Text>
    </View>
  );
};

export default NotificationScreen;
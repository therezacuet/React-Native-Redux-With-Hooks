import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { color } from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { RootStackParamList } from '../navigations/data';
import { getMovieDetails } from '../redux/actions';
import styles from '../styles/MovieDetailsStyle';



interface MovieDetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'DETAILS'>;
  route: RouteProp<RootStackParamList, 'DETAILS'>;
}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (props) => {
  const {movie} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovieDetails = () => dispatch(getMovieDetails(props.route.params.id));
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w185';

  React.useEffect(() => {
    fetchMovieDetails();
    console.log(movie);
    return () => {
      console.log('page is destroyed');
    };
  }, []);
  return (
    
    <View style={styles.container}>

        <Image source={{uri: IMAGE_URL+movie.backdrop_path,}} resizeMode="cover" style={{height: 150, borderRadius: 10}}/>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.subheader}>
            <Text style={{flex:1,color:'blue'}}>Status: {movie.status}</Text>
            <Text style={{flex:2,color:'magenta'}}>Release Date: {movie.release_date}</Text>
        </View>
        <FlatList
            style={{marginTop:20}}
            horizontal={true}
            data={movie.genres}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <Text style={{flex:1,color:'black'}}> <MaterialIcons name="label" color={'red'} style={{paddingTop:10}}/>{item.name} </Text>
                );
            }}
        />
        
        <Text style={styles.overview}>{movie.overview}</Text>
        <View style={styles.backButton}>
            <Button onPress={() => props.navigation.goBack()} title="go back" />
        </View>
        
    </View>
  );
};

export default MovieDetailsScreen;
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RouteProp} from '@react-navigation/native';

import {getMovies, addFavorite, removeFavorite} from '../redux/actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/data';
import { Movie } from '../models/movie';
import { RootState } from '../redux/store';



interface MoviescreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'HOME'>;
}

const Movies : React.FC<MoviescreenProps> = (props) => {
  const {movies, favorites} = useSelector((state: RootState) => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const addToFavorites = (movie: any) => dispatch(addFavorite(movie));
  const removeFromFavorites = (movie: any) => dispatch(removeFavorite(movie));

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddFavorite = (movie: any) => {
    addToFavorites(movie);
  };

  const handleRemoveFavorite = (movie: any) => {
    removeFromFavorites(movie);
  };

  const exists = (movie: { id: any; }) => {
    if (favorites.filter((item: { id: any; }) => item.id === movie.id).length > 0) {
      return true;
    }

    return false;
  };

  const goToDetails = (movie: Movie) => {
    console.log(JSON.stringify(props));
    const id = movie.id;
    props.navigation.navigate('DETAILS', {id});
  };

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
      <Text style={{fontSize: 22}}>Popular Movies</Text>
      <View style={{flex: 1, marginTop: 12}}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL = 'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <TouchableOpacity
                onPress={() =>goToDetails(item)}>
                <View style={{marginVertical: 12}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    source={{
                      uri: IMAGE_URL,
                    }}
                    resizeMode="cover"
                    style={{width: 100, height: 150, borderRadius: 10}}
                  />
                  <View style={{flex: 1, marginLeft: 12}}>
                    <View>
                      <Text style={{fontSize: 22, paddingRight: 16}}>
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                      <MaterialIcons color="green" name="thumb-up" size={32} />
                      <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 10,
                          color: '#64676D',
                        }}>
                        {item.vote_count}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          exists(item)
                            ? handleRemoveFavorite(item)
                            : handleAddFavorite(item)
                        }
                        activeOpacity={0.7}
                        style={{
                          marginLeft: 14,
                          flexDirection: 'row',
                          padding: 2,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 40,
                          width: 40,
                        }}>
                        <MaterialIcons
                          color="orange"
                          size={32}
                          name={exists(item) ? 'favorite' : 'favorite-outline'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Movies;

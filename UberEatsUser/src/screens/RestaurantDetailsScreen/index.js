import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from '../../models'
import { useBasketContext } from '../../contexts/BasketContext';

const RestaurantDetailsPage = () => {

  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;

  const { setRestaurant: setBasketRestaurant } = useBasketContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketRestaurant(null);
    // Fetch restaurant with the id
    console.log("AWS Request Fetch Restauant with id");
    DataStore.query(Restaurant, id).then(setRestaurant);
    // Fetch dishes
    console.log("AWS Request Fetch dishes");
    DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes)
  }, [id])

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} style={{flex: 1}} />;
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes} 
        renderItem={({ item }) => <DishListItem dish={item} /> }
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />

      <Ionicons 
        onPress={() => navigation.goBack()}
        name="arrow-back-circle" 
        size={45} 
        color="white" 
        style={styles.iconContainer} 
      />

    </View>
  );
}

export default RestaurantDetailsPage;
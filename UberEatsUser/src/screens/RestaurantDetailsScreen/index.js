import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import restaurants from '../../../assets/data/restaurants.json'
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes} 
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
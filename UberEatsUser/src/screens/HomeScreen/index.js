import { View, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models'

export default function HomeScreen() {

  const [restaurants, setRestaurants] = useState([]);

  // Fetch Restaurants from DB

  // Method 1
  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   setRestaurants(results);
  // };

  // useEffect(() => {
  //   fetchRestaurants();
  // }, []);

  // Method 2
  // useEffect(() => {
  //   DataStore.query(Restaurant).then(results => setRestaurants(results))
  // }, []);

  // Method 3
  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants)
  }, []);



  return (
    <View style={styles.page}>
      <FlatList 
        data={restaurants} 
        renderItem={({ item }) => <RestaurantItem restaurant={item} /> }
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});
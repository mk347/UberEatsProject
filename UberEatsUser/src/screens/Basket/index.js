import {View, Text, StyleSheet, FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';

const restaurant = restaurants[0];
const dish = restaurants[0].dishes[0];

const getTotal = () => {
  return (dish.price + dish.price * 0.06).toFixed(2);
}
const BasketScreen = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItemsLabel}>Your Items</Text>

      <View>
        <FlatList
          data={restaurant.dishes}
          renderItem={({ item }) => <BasketItem basketDish={item} /> }
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      
      <View style={styles.separator}></View>

      <View style={styles.itemContainer}>
        <Text style={styles.subtotalLabel}>Subtotal</Text>
        <Text style={styles.itemPrice}>${(dish.price).toFixed(2)}</Text>
      </View>

      <View style={styles.itemContainer}>
      <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.itemPrice}>${getTotal()}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next &bull; ${getTotal()}</Text>
        </View>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 25,
    paddingHorizontal: 10
  },
  description: {
    fontSize: 12,
    color: 'gray'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 15
  },
  yourItemsLabel: {
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10
  },
  itemName: {
    fontWeight: '600'
  },
  itemPrice: {
    marginLeft: 'auto'
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginTop: 'auto',
    marginBottom: 10
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default BasketScreen
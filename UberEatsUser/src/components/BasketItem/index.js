import {View, Text, StyleSheet, Image} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json';

const BasketItem = ({ basketDish }) => {
  return(
    <View style={styles.itemContainer}>
      <View style={styles.itemQuantity}><Text>1</Text></View>
      <Text style={styles.itemName}>{basketDish.name}</Text>
      <Text style={styles.itemPrice}>${(basketDish.price).toFixed(2)}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  itemQuantity: {
    backgroundColor: "#f0f0f0",
    width: 20, 
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginRight: 10,
    marginVertical: 15,
    borderRadius: 3,
  },
  itemName: {
    fontWeight: '600'
  },
  itemPrice: {
    marginLeft: 'auto'
  }
});


export default BasketItem
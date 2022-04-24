import { View, Text, Image, FlatList } from 'react-native';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';
import styles from './styles';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      
      <View style={styles.page}>
        <Image source={{uri: order.Restaurant.image}} style={styles.image} resizeMode="cover" />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &bull; {order.createdAt}
          </Text>

          <Text style={styles.yourOrderLabel}>Your Order</Text>

        </View>    
      </View>

    </View>
  )
}

const OrderDetails = () => {
  return(

    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketItem basketDish={item} /> }
      keyExtractor={(item, index) => index.toString()}
    />


  )
}

export default OrderDetails;
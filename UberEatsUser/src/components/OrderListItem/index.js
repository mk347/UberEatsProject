import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ orderItem }) => {
    const navigation = useNavigation();

  return(

    <Pressable 
      onPress={() => navigation.navigate("Order", {id: orderItem.id })} 
    >
      <View style={styles.row}>
        <Image
          source={{uri: orderItem.Restaurant.image}} 
          style={styles.image} 
        />

        <View>
          <Text style={styles.orderName}>{orderItem.Restaurant.name}</Text>
          <Text style={styles.orderItems}>Items</Text>
          <Text style={styles.orderDate}>{orderItem.Restaurant.createdAt} &bull; {orderItem.status}</Text>
        </View>

      </View>

      <View style={styles.separator}></View>  

    </Pressable>

    )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  image: {
    width: 65,
    aspectRatio: 1/1,
    marginRight: 10
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  orderName: {
    fontWeight: '700',
    fontSize: 18
  },
  orderItems: {
    marginVertical: 5,
    fontSize: 12
  }
});


export default OrderListItem
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import orders from '../../../assets/data/orders.json';
import OrderListItem from '../../components/OrderListItem';

const OrdersScreen = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.pageLabel}>Your Orders</Text>

      <FlatList 
          data={orders}
          renderItem={({ item }) => <OrderListItem orderItem={item} /> }
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
      />
      
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 50,
    width: '100%',
    padding: 10
  },
  pageLabel: {
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default OrdersScreen
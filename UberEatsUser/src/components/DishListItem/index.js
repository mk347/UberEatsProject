import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({ dish }) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {navigation.navigate("Dish", {id: dish.id})}} style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
        {dish.image && (<Image 
          source={{uri: dish.image}} style={styles.image} 
        />)}
    </Pressable>
  )
};

const styles=StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  name: {
    fontWeight: '600',
    marginBottom: 5
  },
  description: {
    color: '#525252',
    marginBottom: 5
  },
  price: {
    fontWeight: '600'
  },
  image: {
    height: 100,
    aspectRatio: 1
  }
});

export default DishListItem
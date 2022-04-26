import { View, Text, Image } from 'react-native'
import styles from './styles';

const DEFAULT_IMAGE = 'https://dummyimage.com/600x400/000/fff.jpg&text=Image+Coming+Soon';

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image 
        source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }} 
        style={styles.image} resizeMode="cover" 
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(2)} &bull; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>
      </View>

      <View style={styles.hr}></View>
      
      <Text style={styles.menuTitle}>Menu</Text>

    </View>
  );
}

export default RestaurantHeader;
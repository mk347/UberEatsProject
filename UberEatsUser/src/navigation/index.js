import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BasketScreen from '../screens/Basket';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
import Profile from '../screens/Profile';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';
import { useAuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Profile" component={Profile} />
      )}
    </Stack.Navigator>
  ); 
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return(
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{
          tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="Orders" 
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({color}) => <FontAwesome5 name="list-alt" size={24} color={color} />,
        }}        
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />,
        }}        
        />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="BasketScreen" component={BasketScreen} />
    </HomeStack.Navigator>
  )
}
const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return(
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="OrdersScreen" component={OrdersScreen} />
      <OrdersStack.Screen name="OrderDetails" component={OrderDetails} />
    </OrdersStack.Navigator>
  )
}

export default RootNavigator;
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Order, OrderDish, Dish, Restaurant, Basket, BasketDish, User } = initSchema(schema);

export {
  Order,
  OrderDish,
  Dish,
  Restaurant,
  Basket,
  BasketDish,
  User,
  OrderStatus
};
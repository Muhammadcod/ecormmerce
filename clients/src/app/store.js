import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartsReducer from '../features/cart/CartsSlice';
import usersReducer from '../features/user/UsersSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    carts: cartsReducer,
  },
});

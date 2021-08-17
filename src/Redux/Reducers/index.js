import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from '../Reducers/productReducer';
import { cartReducer } from '../Reducers/cartReducer';

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});
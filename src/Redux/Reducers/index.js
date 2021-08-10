import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from '../Reducers/productReducer';

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
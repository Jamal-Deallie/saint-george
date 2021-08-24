import { ActionTypes } from "../Contants/action-types";

const initialState = {
  products: [],
  size: ''
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload,};
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const sizeAddedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_SIZE:
      return Object.assign(...state, state.product.size = payload);
      
    default:
      return state;
  }
};

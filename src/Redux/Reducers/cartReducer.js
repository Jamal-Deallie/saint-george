import { ActionTypes } from "../Contants/action-types";
import { addProductToCart } from "../Utils/cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addProductToCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

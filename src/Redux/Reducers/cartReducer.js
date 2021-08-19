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
        cartItems: addProductToCart(state.cartItems, action.payload),
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};

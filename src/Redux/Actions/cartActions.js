import { ActionTypes } from "../Contants/action-types";

export const toggleCartHidden = () => {
  return { type: ActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = item => ({
  type: ActionTypes.ADD_ITEM,
  payload: item
});
import { ActionTypes } from "../Contants/action-types";

export const toggleCartHidden = () => {
  return { type: ActionTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});
export const removeItem = (item) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: item,
});

export const toggleCartEdit = () => {
  return { type: ActionTypes.TOGGLE_CART_EDIT };
};


import { ActionTypes } from "../Contants/action-types";

export const addProductToCart = (cartItems, CartItemToAdd) => {
  const existingCartProduct = cartItems.find(
    (cartItem) =>
      cartItem.id === CartItemToAdd.id && cartItem.size === CartItemToAdd.size
  );

  if (existingCartProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            size: cartItem.size,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...CartItemToAdd, quantity: 1 }];
};

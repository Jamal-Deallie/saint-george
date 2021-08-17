export const addProductToCart = (cartItems, CartItemToAdd) => {
  const existingCartProduct = cartItems.find(
    (cartItem) => cartItem.id === CartItemToAdd.id
  );

  if (existingCartProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
    
    return [...cartItems, {...CartItemToAdd, quantity: 1}]
};

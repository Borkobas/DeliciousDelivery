export const addToCart = (item, quantity, variant) => (dispatch, getState) => {
  const cartItem = {
    name: item.name,
    _id: item._id,
    image: item.image,
    variant: variant,
    quantity: quantity,
    prices: item.prices,
    price: item.prices[0][variant] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (item, quantity, variant) => (dispatch, getState) => {
  const cartItem = {
    name: item.name,
    _id: item._id,
    image: item.image,
    variant: variant,
    quantity: quantity,
    prices: item.prices,
    price: item.prices[0][variant] * quantity,
  };

  dispatch({ type: 'REMOVE_FROM_CART', payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: item });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

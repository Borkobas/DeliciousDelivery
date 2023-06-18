import { getState } from 'redux-thunk';

export const addToCart = (dish, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: dish.name,
    _id: dish._id,
    image: dish.image,
    varient: varient,
    quantity: quantity,
    prices: dish.prices,
    price: dish.prices[0][varient] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

};

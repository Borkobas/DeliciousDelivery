export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingCartItem = state.cartItems.find((item) => item._id === action.payload._id);
  
        if (existingCartItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === action.payload._id ? action.payload : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
  
      case 'DELETE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
        };
  
      default:
        return state;
    }
  };
  
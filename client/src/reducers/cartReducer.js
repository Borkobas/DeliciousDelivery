export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingCartItemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
  
        if (existingCartItemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          const existingCartItem = updatedCartItems[existingCartItemIndex];
          existingCartItem.quantity += action.payload.quantity;
          existingCartItem.price += action.payload.price;
  
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
  
        case 'REMOVE_FROM_CART':
          const updatedCartItems = state.cartItems.map((item) => {
            if (item._id === action.payload._id) {
              const updatedItem = { ...item };
              updatedItem.quantity -= action.payload.quantity;
              updatedItem.price -= action.payload.price;
              return updatedItem;
            }
            return item;
          });
        
          return {
            ...state,
            cartItems: updatedCartItems,
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
  
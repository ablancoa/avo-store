import { TYPES } from "actions/shopping.js";

export const initialState = {
  cart: []
}


export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let quantityValue = Number(action.payload[1])
      let itemInCart = state.cart.find((item) => item.id === action.payload[0].id);

      console.log(state)
      if (itemInCart){
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload[0].id
              ? ({ ...item, quantity: item.quantity + quantityValue })
              : item
          ),
        }
      }else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload[0], quantity: quantityValue }],
        };
      }
      
      
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload.id);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case TYPES.CLEAR_CART:
      return initialState;
    
    default:
      return state;
  }
}
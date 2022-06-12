import {
  CREATE_ITEM_SHOPPING_CART,
  GET_SHOPPING_CART_CONTENT,
  REMOVE_ITEM_SHOPPING_CART,
} from "../types";

function CartReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case CREATE_ITEM_SHOPPING_CART:
      return {
        ...state,
        cart: [...state.cart, ...payload],
      };
    case GET_SHOPPING_CART_CONTENT:
      return {
        ...state,
        cart: payload,
      };
    case REMOVE_ITEM_SHOPPING_CART:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
}

export default CartReducer;

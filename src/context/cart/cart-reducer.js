import {
  CREATE_ITEM_SHOPPING_CART,
  DECREMENT_QUANTITY_SHOPPING_CART,
  GET_SHOPPING_CART_CONTENT,
  INCREMENT_QUANTITY_SHOPPING_CART,
  REMOVE_ITEM_SHOPPING_CART,
  TOTAL,
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
    case INCREMENT_QUANTITY_SHOPPING_CART:
      return {
        ...state,
        cart: payload,
      };
    case DECREMENT_QUANTITY_SHOPPING_CART:
      return {
        ...state,
        cart: payload,
      };
    case TOTAL:
      return {
        ...state,
        total: payload,
      };
    default:
      return state;
  }
}

export default CartReducer;

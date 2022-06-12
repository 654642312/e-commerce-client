import React, { useReducer } from "react";
import {
  CREATE_ITEM_SHOPPING_CART,
  DECREMENT_QUANTITY_SHOPPING_CART,
  GET_SHOPPING_CART_CONTENT,
  INCREMENT_QUANTITY_SHOPPING_CART,
  REMOVE_ITEM_SHOPPING_CART,
  TOTAL,
} from "../types";

import CartContext from "./cart-context";
import CartReducer from "./cart-reducer";

const CartState = (props) => {

  const initialState = {
    cart: [],
    total: 0,
  };

  const calculateTotal = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCartContent = () => {
    dispatch({ type: GET_SHOPPING_CART_CONTENT, payload: {} });
    const totalCalculated = calculateTotal()
    dispatch({ type: TOTAL, payload: totalCalculated });
  };

  const removeItemCart = (id) => {
    const cart = state.cart.filter((item) => item.id !== id);
    dispatch({ type: REMOVE_ITEM_SHOPPING_CART, payload: cart });
    const totalCalculated = calculateTotal()
    dispatch({ type: TOTAL, payload: totalCalculated });
  };

  const createItemCart = (item) => {
    dispatch({
      type: CREATE_ITEM_SHOPPING_CART,
      payload: [
        {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: 1,
        },
      ],
    });
    const totalCalculated = calculateTotal()
    dispatch({ type: TOTAL, payload: totalCalculated });
  };

  const incrementQuantity = (id) => {
    const cart = state.cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    dispatch({ type: INCREMENT_QUANTITY_SHOPPING_CART, payload: cart });
    const totalCalculated = calculateTotal()
    dispatch({ type: TOTAL, payload: totalCalculated });
  };

  const decrementQuantity = (id) => {
    if(state.total === 0) return;
    const cart = state.cart.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
      }
      return item;
    });
    dispatch({ type: DECREMENT_QUANTITY_SHOPPING_CART, payload: cart });
    const totalCalculated = calculateTotal()
    dispatch({ type: TOTAL, payload: totalCalculated });
  };

  return (
    <CartContext.Provider
      value={{
        total: state.total ? state.total : calculateTotal(),
        cart: state.cart,
        createItemCart,
        removeItemCart,
        getCartContent,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;

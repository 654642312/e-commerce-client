import React, { useReducer } from "react";
import { CREATE_ITEM_SHOPPING_CART, GET_SHOPPING_CART_CONTENT, INCREMENT_QUANTITY_SHOPPING_CART, REMOVE_ITEM_SHOPPING_CART } from "../types";

import CartContext from "./cart-context";
import CartReducer from "./cart-reducer";

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCartContent = () => {
    dispatch({ type: GET_SHOPPING_CART_CONTENT, payload: {} });
  };

  const removeItemCart = (id) => {
    const cart = state.cart.filter((item) => item.id !== id);
    dispatch({ type: REMOVE_ITEM_SHOPPING_CART, payload: cart });
  };

  const createItemCart = (item) => {
    dispatch({ type: CREATE_ITEM_SHOPPING_CART, payload: [{
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
    }] });
  }

  const incrementQuantity = (id) => {
    dispatch({ type: INCREMENT_QUANTITY_SHOPPING_CART, payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        createItemCart,
        removeItemCart,
        getCartContent,
        incrementQuantity
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;

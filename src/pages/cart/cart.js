import { useContext } from "react";
import ShoppingCartCard from "./cart-card/cart-card";
import CartContext from "../../context/cart/cart-context";
import "./styles.css";


function CartIsEmpty() {
  return (
    <div className="cart-empty">
      <h3>YOUR CART IS EMPTY</h3>
    </div>
  );
}

function ShoppingCart() {
  const cartContext = useContext(CartContext);

  if(cartContext.cart.length === 0) return <CartIsEmpty />

  return (
    <div className="cart-page">
      <div>
        {cartContext.cart?.map((item) => (
          <ShoppingCartCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            id={item.id}
            quantity="1"
          />
        ))}
      </div>
      <div className="cart-page-info">
        <button className="cart-page-info-clear-button">Clear Cart</button>
        <span className="cart-page-info-price">
          <span>Total:</span> $ 200
        </span>
        <button className="cart-page-info-button-checkout">
          Paypal Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;

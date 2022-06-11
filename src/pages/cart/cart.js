import ShoppingCartCard from "./cart-card/cart-card";
import "./styles.css";

function ShoppingCart() {
  return (
    <div className="cart-page">
      <div>
        <ShoppingCartCard
          title="Libro Los 7 Habitos De La Gente Altamente Efectiva"
          image="https://http2.mlstatic.com/D_NQ_NP_831374-MLM44589181743_012021-V.webp"
          price="180"
          quantity="10"
        />
        <ShoppingCartCard
          title="Libro Los 7 Habitos De La Gente Altamente Efectiva"
          image="https://http2.mlstatic.com/D_NQ_NP_831374-MLM44589181743_012021-V.webp"
          price="180"
          quantity="10"
        />
        <ShoppingCartCard
          title="Libro Los 7 Habitos De La Gente Altamente Efectiva"
          image="https://http2.mlstatic.com/D_NQ_NP_831374-MLM44589181743_012021-V.webp"
          price="180"
          quantity="10"
        />
      </div>
      <div className="cart-page-info">
        <button className="cart-page-info-clear-button">Clear Cart</button>
        <span className="cart-page-info-price"><span>Total:</span> $ 200</span>
        <button className="cart-page-info-button-checkout">Paypal Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;

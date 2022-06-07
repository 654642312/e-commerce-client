import "./styles.css";

function Product() {
  return (
    <div className="product">
      <div className="product-container">
        <div>
          <img
            className="product-image"
            src="https://http2.mlstatic.com/D_NQ_NP_831374-MLM44589181743_012021-V.webp"
            alt="placeholder"
          />
        </div>
        <div className="product-info">
          <h1>Libro Los 7 Habitos De La Gente Altamente Efectiva</h1>
          <span className="product-info-price">$ 180</span>
          <span className="product-info-stock">Stock disponible</span>
          <button>Agregar al carrito</button>
          <p className="product-info-p">
            faucibus in ornare quam viverra orci sagittis eu volutpat odio
            facilisis mauris sit amet massa vitae tortor condimentum lacinia
            quis vel eros donec
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;

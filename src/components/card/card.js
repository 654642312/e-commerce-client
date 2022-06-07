import { Link } from "react-router-dom";
import "./styles.css";

function Card({ img, price, title, id }) {
  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <img className="card-img" src={img} alt="placeholder" />
      </Link>
      <div className="card-info">
        <span className="card-info-price">$ {price}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;

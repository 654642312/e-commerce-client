import "./styles.css";

function Card({ img, price, title }) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={img}
        alt="placeholder"
      />
      <div className="card-info">
        <span className="card-info-price" >$ { price }</span>
        <span>{ title }</span>
      </div>
    </div>
  );
}

export default Card;

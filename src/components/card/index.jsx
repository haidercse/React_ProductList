import React from "react";
import "../../assets/Card.css";

function Card({ title, description, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <p className="card-price">${price.toFixed(2)}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default Card;

import React from "react";
import { Link } from "react-router-dom";
function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <div className="m-1 d-flex flex-column">
        <img src={item.img} className="itemCardImage" alt={item.title} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <Link className="btn btn-primary" to={`/item/${item.id}`}> Ver Mas </Link>
      </div>
    </div>
  );
}

export default ItemCard;

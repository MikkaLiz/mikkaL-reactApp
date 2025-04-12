/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <div className="itemCardContent">
        <img src={item.img} className="itemCardImage" alt={item.title} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        {item.stock === 0 && (
          <p className="text-danger">Actualmente Sin stock</p>
        )}
      </div>
      <div className="itemCardButton">
        <NavLink className="btn btn-primary" to={`/item/${item.id}`} style={{ width: "100%" }}>
          Ver Mas
        </NavLink>
      </div>
    </div>
  );
}

export default ItemCard;
/* eslint-disable react/prop-types */
import { useState } from "react";

const ContadorComponent = (props) => {
  const [count, setCount] = useState(1);
  const { stock, onAdd, isInCart, removeItem, modifyAmount } = props;
  const sumar = () => {
    if (count < stock) {
      if (isInCart) {
        modifyAmount(count + 1);
      }
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      if (isInCart) {
        modifyAmount(count - 1);
      }
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAdd(count);
  };

  const removeFromCart = () => {
    setCount(1);
    removeItem();
  };
  return (
    <div>
      <div className="d-flex mb-2 align-items-center">
        <button
          type="button"
          onClick={restar}
          className="btn btn-primary btn-danger"
          disabled={count === 1}
        >
          -
        </button>
        {stock > 0 && (
          <p className="mx-1 my-0">Cantidad: {count}</p>
        )}
        {stock==0 &&(
          <p className="mx-1 my-0">Sin stock</p>
        )}
        <button
          type="button"
          onClick={sumar}
          className="btn btn-primary btn-success"
          disabled={count === stock || stock === 0}
        >
          +
        </button>
      </div>
      <div>

        <button
          type="button"
          onClick={addToCart}
          className="btn btn-primary btn-success"
          disabled={count === 0 || isInCart || stock === 0}
        >
          {isInCart ? "Ya esta en tu carrito 👌" : stock > 0 ? "Agregar al carrito": "Estamos sin stock"}
        </button>
      </div>
      {isInCart && (
        <div className="mt-2">
          <button
            type="button"
            onClick={removeFromCart}
            className="btn btn-danger"
          >
            Eliminar del carrito
          </button>
        </div>
      )}
    </div>
  );
};
export default ContadorComponent;

import { useState, useEffect } from "react";
import Text from "./TextComponent";
import { LuBadge } from "react-icons/lu";
const ContadorComponent = (props) => {
  const [count, setCount] = useState(1);
  const { stock, onAdd } = props;
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restart = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="d-flex mb-2">
        <button
          type="button"
          onClick={restart}
          className="btn btn-primary btn-danger"
          disabled={count === 1}
        >
          -
        </button>
        <p className="mx-1">
        Cantidad: {count}
        </p>
        <button
          type="button"
          onClick={sumar}
          className="btn btn-primary btn-success"
          disabled={count === stock}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => onAdd(count)}
          className="btn btn-primary btn-success"
          disabled={count === 0}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
};
export default ContadorComponent;

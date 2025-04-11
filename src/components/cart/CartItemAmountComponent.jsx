/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { getStock } from "../../firebase";
import { FaTrash } from "react-icons/fa";

const CartItemAmount = ({ id, quantity }) => {
  const [amount, setAmount] = useState(quantity);
  const [stock, setStock] = useState(0);
  const { removeItem, modifyAmount } = useContext(CartContext);
  const [confirmedDelete, setConfirmedDelete] = useState(false);
  useEffect(() => {
    getStock(id)
      .then((availableStock) => {
        setStock(availableStock);
      })
      .catch((err) => {
        console.log(err);
        setStock(amount);
      });
  }, [id]);

  const handleRemove = () => {
    if (confirmedDelete) {
      setConfirmedDelete(false);
      removeItem(id);
    } else {
      setConfirmedDelete(true);
    }
  };

  const handleIncrement = () => {
    if(confirmedDelete) {
      setConfirmedDelete(false);
    }
    modifyAmount(id, amount + 1);
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    modifyAmount(id, amount - 1);
    setAmount(amount - 1);
  };

  return (
    <div className="cart-item-amount d-flex space-between align-items-center gap-2 justify-content-end">
      {amount > 1 ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDecrement}
        >
          -
        </button>
      ) : (
        <button type="button" className="btn btn-danger" onClick={handleRemove}>
          {confirmedDelete ? (
            <span>Confirma </span>
          ) : (
            <span>Quitar </span>
          )}
          <FaTrash className="trash-icon" />
        </button>
      )}
      {amount}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
        disabled={amount >= stock}
      >
        +
      </button>
    </div>
  );
};

export default CartItemAmount;

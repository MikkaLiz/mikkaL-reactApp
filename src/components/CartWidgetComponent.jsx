import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div>
      <span>
        <TiShoppingCart color="white" fontSize={'1.5rem'} />
        {totalQuantity() > 0 && (
          <span className="badge bg-secondary">{totalQuantity()}</span>
        )}
      </span>
    </div>
  );
};

export default CartWidget;
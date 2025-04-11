import { useContext } from "react";
import CartItemList from "./CartItemListComponent";
import { CartContext } from "../../context/CartContext";

const CartContainerComponent = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="col-lg-9 col-md-11 col-sm-11 mx-auto mt-4">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito esta vacio, puedes empezar a ver nuestro catalogo</p>
      ) : (
        <CartItemList />
      )}
    </div>
  );
};

export default CartContainerComponent;

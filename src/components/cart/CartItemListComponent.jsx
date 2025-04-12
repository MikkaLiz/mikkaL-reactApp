import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import CartItem from "./CartItemComponent";
import Swal from "sweetalert2";
const CartItemList = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  const handleClear = () => {
    Swal.fire({
      title: "¿Estás segur@?",
      text: "¿Quieres limpiar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire("Hemos limpiado tu carrito", "", "success");
      }
    });
  }
  const buildCartItems = () => {
    return cart.map((cartElement) => {
      return <CartItem item={cartElement} onRemove={removeItem} key={cartElement.item.id} />;
    });
  };
  return (
    <div>
      <h2 className="text-center">Lista de productos</h2>
      <div className="cart-item-list-header d-flex justify-content-between align-items-center col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
        <p className="col-4"><b>Producto</b></p>
        <p className="col-2"><b>Precio</b></p>
        <p className="col-2"><b>Total</b></p>
        <p className="col-2" style={{textAlign:"end"}}><b>Cantidad</b></p>
      </div>
      <div className="cart-item-list">{buildCartItems()}</div>
      <div className="col-12 d-flex justify-content-end align-items-end mt-4">
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          Limpiar Carrito
        </button>
      </div>
      <div className="col-12 d-flex justify-content-end align-items-end mt-4">
        <Link type="button" className="btn btn-success" as={NavLink} to="/checkout">
          Continua con tu compra
        </Link>
      </div>
    </div>
  );
};

export default CartItemList;

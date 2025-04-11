/* eslint-disable react/prop-types */
import CartItemAmount from "./CartItemAmountComponent";
const CartItem = ({ item }) => {
  const actualItem = item.item;

  return (
    <div className="cart-item d-flex justify-content-between align-items-center col-lg-12 col-md-12 col-sm-12 mx-auto mt-4">
      <div className="col-4 d-flex justify-content-start align-items-center">
        <div className="col-2">
          <img
            src={actualItem.img}
            alt={actualItem.name}
            className="cart-item-image"
          />
        </div>
        <div className="col-10 ">
          <p className="cartItemDetail">{actualItem.name}</p>
        </div>
      </div>
      <div className="col-2 ">
        <p className="cartItemDetail">Precio: ${actualItem.price}</p>
      </div>
      <div className="col-2 ">
        <p className="cartItemDetail">
          Total: ${actualItem.price * item.quantity}
        </p>
      </div>
      <div className="col-2">
        <CartItemAmount id={actualItem.id} quantity={item.quantity} />
      </div>
    </div>
  );
};

export default CartItem;

/* eslint-disable react/prop-types */
import { FaSpinner } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder, getOrderById, updateStock } from "../../firebase";

const CheckoutHandler = ({
  orderDetails,
  orderHandler,
  errorHandler,
  stateHandler,
}) => {
  const { clear } = useContext(CartContext);

  const createOrderWithDelay = async (orderDetails) => {
    try {
      const newOrderData = {
        ...orderDetails,
        cart: orderDetails.cart.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      const orderId = await createOrder(newOrderData);
      await Promise.all(
        orderDetails.cart.map((item) => {
          return updateStock(
            item.id,
            item.stock -
              newOrderData.cart.find((cartItem) => cartItem.id === item.id)
                .quantity
          );
        })
      );
      const orderData = await getOrderById(orderId);
      orderHandler(orderData);
      clear();

      setTimeout(() => {
        stateHandler("success");
      }, 4000);

      return orderId;
    } catch (error) {

      errorHandler(error);
      stateHandler("error");
    }
  };

  useEffect(() => {
    if (orderDetails) {
      createOrderWithDelay(orderDetails);
    }
  }, [orderDetails]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <FaSpinner className="spinner" size={50} />
      <h1>Gracias por tu compra!</h1>
      <p>Estamos procesando tu orden...</p>
    </div>
  );
};

export default CheckoutHandler;

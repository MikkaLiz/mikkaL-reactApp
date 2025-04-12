/* eslint-disable react/prop-types */
import OrderDetails from "./OrderDetailsComponent";
const OrderDetailsContainer = ({ orderDetails }) => {
  return (
    <div className="container col-12">
      <h1>Tu orden fue exitosa 🙌</h1>
      <h2>Detalles de la orden</h2>
      <OrderDetails order={orderDetails} />
      <button className="btn btn-primary mt-3" onClick={() => (window.location.href = "/")}>
        Volver a la tienda
      </button>
    </div>
  );
};
export default OrderDetailsContainer;
/* eslint-disable react/prop-types */
import OrderDetailsProductListContainer from "./OrderDetailsProductListContainerComponent";
const OrderDetails = ({ order }) => {
  return (
    <div className="container mt-4 col-12">
      <h5 className="row">ID de la orden: {order.id}</h5>
      <br></br>
      <h5 className="row">Tus datos</h5>
      <p className="row">Nombre: {order.buyer.name}</p>
      <p className="row">Dirección: {order.buyer.address}</p>
      <p className="row">Email: {order.buyer.email}</p>
      <br></br>
      <h5 className="row">Detalles de la compra</h5>
      <p className="row">Fecha: {order.date.toDate().toLocaleString()}</p>
      <br></br>
      <h5 className="row">Productos</h5>
      <OrderDetailsProductListContainer products={order.cart} />
      <hr />
      <p className="row d-flex justify-content-end align-items-center" style={{textAlign: "end"}}><b>Total: ${order.total}</b></p>
    </div>
  );
};
export default OrderDetails;

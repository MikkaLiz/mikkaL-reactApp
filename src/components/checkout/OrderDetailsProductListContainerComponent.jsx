/* eslint-disable react/prop-types */
import OrderDetailsProductList from "./OrderDetailsProductListComponent";
const OrderDetailsProductListContainer = ({ products }) => {
  return (
    <div>
      <OrderDetailsProductList products={products} />
    </div>
  );
};
export default OrderDetailsProductListContainer;

/* eslint-disable react/prop-types */
import { useContext } from "react";
import ContadorComponent from "./ContadorComponent";
import { CartContext } from "../../context/CartContext";
const ItemDetail = ({ product }) => {
  const { addToCart, isInCart, removeItem, modifyAmount } = useContext(CartContext);
  const addProduct = (quantity) => {
    addToCart(product, quantity);
  };

  const removeFromCart = () => {
    removeItem(product.id);
  };

  const isInCartProduct = isInCart(product.id);

  const modifyProductAmount = (newQuantity) => {
    modifyAmount(product.id, newQuantity);
  }

  return (
    <div className="itemCardContainer d-flex col-lg-8 col-md-12 col-sm-12 mx-auto mt-4">
      <div className="col-6">
        <img src={product.img} alt={product.name} style={{ width: "100%" }} />
      </div>
      <div className="col-6">
        <h1>{product.name}</h1>
        <p className="mt-5">Descripcion</p>
        <p>{product.description}</p>
        {product.stock === 0 && (
          <p className="text-danger">Sin stock</p>
        )}
        {product.stock > 0 && (
          <p>Stock actual: {product.stock}</p>
        )}
        <p className="my-3">Precio: ${product.price}</p>
        <ContadorComponent
          stock={product.stock}
          onAdd={addProduct}
          isInCart={isInCartProduct}
          removeItem={removeFromCart}
          modifyAmount={modifyProductAmount}
        />
      </div>
    </div>
  );
};
export default ItemDetail;

/* eslint-disable react/prop-types */
const OrderDetailsProductList = ({ products }) => {
    return (
        <div className="container mt-4">
            {products.map((product) => (
                <div className="row" key={product.id}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <p className="col-4">{product.name}</p>
                        <p className="col-4">Precio: ${product.price}</p>
                        <p className="col-4">Cantidad: {product.quantity}</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center">
                        <p><b>Total: ${product.price * product.quantity}</b></p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
export default OrderDetailsProductList;
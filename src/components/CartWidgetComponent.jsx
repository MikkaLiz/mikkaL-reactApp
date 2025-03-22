import { TiShoppingCart } from "react-icons/ti"
const CartWidget = () => {
    return (
        <div>
            <span>
                <TiShoppingCart color="white" fontSize={'1.5rem'}/>
                <span className="badge bg-secondary ">0</span>
            </span>
        </div>
    )
}
export default CartWidget
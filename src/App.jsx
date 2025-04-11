import "./App.css";
import "./components/NavbarComponent";
import NavBarStrapComponent from "./components/NavBarStrapComponent";
import ItemListContainer from "./components/item/ItemListContainerComponent"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/item/ItemDetailContainerComponent";
import { CartProvider } from "./context/CartContext";
import CartContainerComponent from "./components/cart/CartContainerComponent";
import ClientCheckoutContainer from "./components/checkout/ClientCheckoutContainer";
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBarStrapComponent />

          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route
              path="/category/:type"
              element={<ItemListContainer greeting="nuevos" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainerComponent />} />
            <Route path="/checkout" element={<ClientCheckoutContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

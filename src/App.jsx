import "./App.css";
import "./components/NavbarComponent";
import NavbarComponent from "./components/NavbarComponent";
import NavBarStrapComponent from "./components/NavBarStrapComponent";
import ContadorComponent from "./components/ContadorComponent";
import ItemListContainer from "./components/ItemListContainerComponent";
import ToDoItem from "./components/ToDoItemComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemCardComponent";
import ItemDetailContainer from "./components/ItemDetailContainerComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarStrapComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola" />} />
          <Route path="/category/:type" element={<ItemListContainer greeting="nuevos" />} />
          <Route path="/to-do" element={<ToDoItem />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

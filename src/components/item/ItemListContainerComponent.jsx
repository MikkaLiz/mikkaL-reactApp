import { useParams } from "react-router-dom";
import ItemList from "./ItemListComponent";
const ItemListContainer = () => {
  const { type } = useParams();

  return (
    <div>
      <ItemList type={type} />
    </div>
  );
};

export default ItemListContainer;

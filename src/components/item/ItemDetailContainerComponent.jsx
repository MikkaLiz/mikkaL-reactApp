import { useEffect, useState } from "react";
import { getItemById } from "../../firebase";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetailComponent";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItemById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return loading === false ? ( 
    <ItemDetail product={product}/>
  ) : (
    <div>
      <div className="col-1 mt-4 mx-auto">
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getItems, getItemByCategory } from "../../firebase";
import { FaSpinner } from "react-icons/fa";
import ItemCard from "./ItemCardComponent";

const ItemList = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); 
        let data;

        if (type) {
        
          data = await getItemByCategory(type);
        } else {

          data = await getItems();
        }

        setProducts(data); 
      } catch (e) {
        console.log(e);
        setError(true); 
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, [type]);

  return loading ? (
    <div>
      <div className="col-1 mt-4 mx-auto">
        <FaSpinner className="spinner" />
      </div>
    </div>
  ) : (
    <div className="itemCardContainer col-lg-8 col-md-12 col-sm-12 mx-auto mt-4">
      {products.map((product) => (
        <ItemCard key={product.id} item={product} />
      ))}
    </div>
  );
};
export default ItemList;
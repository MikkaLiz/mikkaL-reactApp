import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import getProducts from "../mock/asyncData";
import { FaSpinner } from "react-icons/fa";
import ItemCard from "./ItemCardComponent";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [data, setData] = useState("");
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { type } = useParams();
  let error = false;

  let promiseExample = new Promise((resolve, reject) => {
    if (error) {
      reject("reject");
    } else {
      resolve("resolve");
    }
  });

  useEffect(() => {
    setLoading(true);
    // Fetch products when the component mounts
    getProducts()
      .then((data) => {
        if(type){
          setProducts(data.filter(product => product.category === type));
        } else{
          setProducts(data); 
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [type]);

  return loading === false ? (
    <div className="itemCardContainer col-lg-8 col-md-12 col-sm-12  mx-auto mt-4">
      {products.map((product) => (
        <ItemCard key={product.id} item={product} />
      ))}
    </div>
  ) : (
    <div>
      <p>{props.greeting}</p>
      <div className="col-1 mt-4 mx-auto">
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
};

export default ItemListContainer;

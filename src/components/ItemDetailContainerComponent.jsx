import React, { useEffect, useState } from "react";
import getProducts from "../mock/asyncData";
import { FaSpinner } from "react-icons/fa";
import ItemCard from "./ItemCardComponent";
import { useParams } from "react-router-dom";
import ContadorComponent from "./ContadorComponent";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((product) => product.id === id));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return loading === false ? ( 
    <div className="itemCardContainer d-flex col-lg-8 col-md-12 col-sm-12 mx-auto mt-4">
      <div className="col-6">
        <img src={product.img} alt={product.name} style={{width: "100%"}}/>
      </div>
      <div className="col-6">
        <h1>{product.name}</h1>
        <p className="mt-5">Descripcion</p>
        <p>{product.description}</p>
        <p>Stock actual:{product.stock}</p>
        <p className="my-3">Precio: ${product.price}</p>
        <ContadorComponent stock={product.stock}/>
      </div>
    </div>
  ) : (
    <div>
      <div className="col-1 mt-4 mx-auto">
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

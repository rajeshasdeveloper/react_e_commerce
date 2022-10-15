import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const products = await axios("https://fakestoreapi.com/products").catch(
      (err) => console.log(err.message)
    );
    dispatch(setProducts(products.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

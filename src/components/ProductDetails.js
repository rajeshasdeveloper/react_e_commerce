import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeProduct } from "../redux/actions/productAction";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, price } = product;
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const fetchProductDetail = async () => {
    const product = await axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .catch((err) => console.log(err));
    dispatch(selectProduct(product.data));
  };
  useEffect(() => {
    if (product_id) fetchProductDetail();
    dispatch(removeProduct());
  }, [product_id]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length ? (
        <div className="middle aligned row">
          <div className="card">
            <div className="image" style={{ textAlign: "center" }}>
              <img
                src={image}
                alt={title}
                style={{ maxWidth: "30%", marginTop: "10%" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "20%" }}>
          <h2>Loading ...</h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

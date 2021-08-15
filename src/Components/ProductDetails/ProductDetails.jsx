import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../Redux/Actions/productActions";
import Product from "../../Components/Product/Product";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(product);


  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
  }, [productId]);

  const { sku, ...otherProductProps } = product;


  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Product key={sku} {...otherProductProps} />
      )}
    </>
  );
};

export default ProductDetails;

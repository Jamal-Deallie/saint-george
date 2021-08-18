import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../../Redux/Actions/productActions";
import Product from "../../Components/Product/Product";
import Loading from "../../Components/Loading/Loading";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(product);


  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  const { sku, ...otherProductProps } = product;


  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loading/>
      ) : (
        <Product key={product.sku} product={product} />
      )}
    </>
  );
};

export default ProductDetails;

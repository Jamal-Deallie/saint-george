import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectedProduct } from "../../Redux/Actions/productActions";
import Button from "../../Components/Button/Button";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  console.log(product);

  const fetchProductDetail = async () => {
    const responseData = await axios
      .get(`https://my-sneaker-api.herokuapp.com/sneakers/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(responseData.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  const { id, gender, name, brand, estimatedMarketValue, image, story, colorway, releaseYear, silhouette } = product;
 

  const sizes = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="product--card" key={id}>
          <span>{brand}</span>
          <h1>{name}</h1>
          <span>${estimatedMarketValue}</span>
            <img src={image.original} alt={name} />
            
          <Button type="outline"> Add to Cart</Button>
          <label for="sizes">{`Select US ${gender}`}</label>
          {sizes(7.5, 20).map((size) => {
            return <input type="button" value={size} />;
          })}
          <div>
            <span>{silhouette}</span>
            <span>{colorway}</span>
            <span>{releaseYear}</span>
            <p>{story}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

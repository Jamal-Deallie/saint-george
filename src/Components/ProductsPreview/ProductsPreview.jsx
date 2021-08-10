import React, { useEffect } from "react";
// import { Sneaker_Data as responseData } from "../../Shared/Sneaker_Data";
import ProductCard from "../ProductCard/ProductCard";
import Subheader from "../../Components/Subheader/Subheader";
import axios from "axios";
import "./ProductsPreview.css";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../Redux/Actions/productActions";
import { Sneaker_Data } from "../../Shared/Sneaker_Data";

export const ProductsPreview = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const responseData = await axios
      .get("https://my-sneaker-api.herokuapp.com/sneakers")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(responseData.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  const filterGender = products.filter((product) => product.gender === "men");

  const filterBrand = (brand, gender) => {
    return products.filter(
      (product) => product.brand === `${brand}` && product.gender === `${gender}`
    );
  };

  const filterData = (keyword, gender) => {
    return products.filter(
      (product) => product.story.includes(keyword) && product.gender === `${gender}`
    );
  };


  console.log(filterGender);



  return (
    <>
       <Subheader subheader={"New Arrivals"} /> 
      <div className="card--container">
        {products.slice(0, 4).map(({ sku, ...otherProductProps }) => {
          return <ProductCard key={sku} {...otherProductProps} />;
          })}
      </div>
      <Subheader subheader={"Air Jordan"} />
      <div className="card--container">
        {filterBrand("Air Jordan", "men")
            .slice(0, 4)
            .map(({ sku, ...otherProductProps }) => {
              return <ProductCard key={sku} {...otherProductProps} />;
            })}
      </div>
      <Subheader subheader={"Yeezy"} />
      <div className="card--container">
        {filterBrand("adidas", "men")
            .slice(0, 4)
            .map(({ sku, ...otherProductProps }) => {
              return <ProductCard key={sku} {...otherProductProps} />;
            })}
      </div>
      <Subheader subheader={"Nike"} />
      <div className="card--container">
        {filterBrand("Nike", "men")
            .slice(0, 4)
            .map(({ sku, ...otherProductProps }) => {
              return <ProductCard key={sku} {...otherProductProps} />;
            })}
      </div>
    </>
  );
};

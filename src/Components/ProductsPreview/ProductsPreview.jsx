import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Subheader from "../../Components/Subheader/Subheader";
import "./ProductsPreview.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Actions/productActions";


export const ProductsPreview = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
      (product) => product.name.includes(keyword) && product.gender === `${gender}`
    );
  };


  console.log(products);



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

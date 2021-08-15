import React, { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import SortDropDown from "../../Components/SortDropdown/SortDropDown";
import Filter from "../../Components/Filter/Filter";
import "./Yeezy.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Actions/productActions";
import { Yeezy_Items as items } from "../../Shared/Banner_Items";
import { YeezyModels as models } from "../../Shared/Filter_Items";

const Yeezy = () => {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products:", products);


  const imgFilter =
    products &&
    products.filter((data) => {
      return data.thumbnail !== null && data.thumbnail !== "";
    });

  const filterData = (keyword, gender) => {
    return imgFilter.filter(
      (data) => data.keyword.includes(keyword) && data.gender === `${gender}`
    );
  };

  
  const length = filterData("kanye", "men").length;

  

  return (
    <div className="yeezy">
      {items.map(({ id, ...otherBannerProps }) => (
        <Banner key={id} {...otherBannerProps} />
      ))}
      <div className="yeezy--btn">
        <SortDropDown />
      </div>
      <Filter results={length} models={models}/>
      <div className="card--container">
        {filterData("kanye", "men").map(({ sku, ...otherProductProps }) => {
          return <ProductCard key={sku} {...otherProductProps} />;
        })}
      </div>
    </div>
  );
};

export default Yeezy;

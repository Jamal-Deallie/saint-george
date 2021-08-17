import React, { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Banner from "../../Components/Banner/Banner";
import SortDropDown from "../../Components/SortDropdown/SortDropDown";
import Filter from "../../Components/Filter/Filter";
import "./Yeezy.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Actions/productActions";
import { Yeezy_Items as items } from "../../Shared/Banner_Items";
import { YeezyModels as models } from "../../Shared/Filter_Items";

const Jordan = () => {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

   const filterData = (keyword, gender) => {
    return products.filter(
      (data) => data.keyword.includes(keyword) && data.gender === `${gender}`
    );
  };

  
  const length = filterData("Air Jordan", "men").length;

  

  return (
    <div className="jordan">
      {items.map(({ id, ...otherBannerProps }) => (
        <Banner key={id} {...otherBannerProps} />
      ))}
      <div className="jordan--btn">
        <SortDropDown />
      </div>
      <Filter results={length} models={models}/>
      <div className="card--container">
        {filterData("Air Jordan", "men").map(({ sku, ...otherProductProps }) => {
          return <ProductCard key={sku} {...otherProductProps}/>;
        })}
      </div>
    </div>
  );
};

export default Yeezy;

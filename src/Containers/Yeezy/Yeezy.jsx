import React, { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import SortDropDown from "../../Components/SortDropdown/SortDropDown";
import Filter from "../../Components/Filter/Filter";
import "./Yeezy.css";
import { Sneaker_Data as responseData } from "../../Shared/Sneaker_Data";
import { Yeezy_Items as items } from "../../Shared/Banner_Items";
import { YeezyModels as models } from "../../Shared/Filter_Items";

const Yeezy = () => {
  const [pageNumber, setNumber] = useState(0);
  const productsPerPage = 25;
  const pagesPerBrand = pageNumber * productsPerPage;

  const products = responseData.slice(
    pagesPerBrand,
    pagesPerBrand + productsPerPage
  );

  const imgFilter =
    responseData &&
    responseData.filter((data) => {
      return data.image.thumbnail !== null && data.image.thumbnail !== "";
    });

  const filterData = (keyword, gender) => {
    return imgFilter.filter(
      (data) => data.story.includes(keyword) && data.gender === `${gender}`
    );
  };

  
  const length = filterData("Yeezy", "men").length;

  return (
    <div className="yeezy">
      {items.map(({ id, ...otherBannerProps }) => (
        <Banner key={id} {...otherBannerProps} />
      ))}
      <div className="yeezy--btn">
        <SortDropDown />
        <Button type="primary">Add Filters</Button>
      </div>
      <Filter results={length} models={models}/>
      <div className="card--container">
        {filterData("Yeezy", "men").map(({ id, ...otherProductProps }) => {
          return <ProductCard key={id} {...otherProductProps} />;
        })}
      </div>
    </div>
  );
};

export default Yeezy;

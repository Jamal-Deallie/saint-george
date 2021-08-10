import React, { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Banner from "../../Components/Banner/Banner";
import Button from "../../Components/Button/Button";
import SortDropDown from "../../Components/SortDropdown/SortDropDown";
import "./Women.css";
import Filter from "../../Components/Filter/Filter";
import { Sneaker_Data as responseData } from "../../Shared/Sneaker_Data";
import { Women_Items as items } from "../../Shared/Banner_Items";

function Women() {
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

  const filterData = (gender) => {
    return imgFilter.filter((data) => data.gender === `${gender}`);
  };

const length = filterData("wommen").length;

  return (
    <div className="women">
      {items.map(({ id, ...otherBannerProps }) => (
        <Banner key={id} {...otherBannerProps} />
      ))}

      <div className="women--btn">
        <SortDropDown />
        <Button type="primary">Add Filters</Button>
      </div>
      <Filter results={length} />
      <div className="card--container">
        {filterData("women").map(({ id, ...otherProductProps }) => {
          return <ProductCard key={id} {...otherProductProps} />;
        })}
      </div>
    </div>
  );
}

export default Women;

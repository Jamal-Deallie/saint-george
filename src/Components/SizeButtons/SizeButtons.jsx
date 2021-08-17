import React from "react";
import "./SizeButtons.css";

const SizeButtons = ({ gender }) => {
  const menSizes = [
    7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
    15.5, 16, 16.5, 17,
  ];

  const womenSizes = [
    8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
    16,
  ];

  const sizesOptions = (gender) => {
    gender === "men"
      ? menSizes.map((size) => {
          return (
            <button type="submit" value={size} key={size}>
              {size}
            </button>
          );
        })
      : womenSizes.map((size) => {
          return (
            <button type="submit" value={size} key={size}>
              {size}
            </button>
          );
        });
  }

  console.log(sizesOptions);
  return (
    <>
      <label htmlFor="sizes">{`Select US ${gender}`}</label>
      <div className="sizeButton" onClick={console.log('clicked')}>
        {gender === "men"
          ? menSizes.map((size) => {
              return (
                <button type="submit" value={size} key={size}>
                  {size}
                </button>
              );
            })
          : womenSizes.map((size) => {
              return (
                <button type="submit" value={size} key={size}>
                  {size}
                </button>
              );
            })}
      </div>
    </>
  );
};

export default SizeButtons;

import React from "react";
import "./SizeButtons.css";

const SizeButtons = ({ gender }) => {
  const sizes = [
    7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
    15.5, 16, 16.5, 17,
  ];

  return (
    <>
      <label htmlFor="sizes">{`Select US ${gender}`}</label>
      <div className="sizeButton">
        {sizes.map((size) => {
          return <input type="submit" value={size} key={size} />;
        })}
      </div>
    </>
  );
};

export default SizeButtons;
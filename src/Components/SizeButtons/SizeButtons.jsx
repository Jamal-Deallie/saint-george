import React from "react";
import "./SizeButtons.css";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../Redux/Selectors/cartSelectors";
import { addSize} from "../../Redux/Actions/productActions";

const SizeButtons = ({ product }) => {


  const { gender } = product;

  console.log(addSize)

  const menSizes = [
    '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14', '14.5', '15',
    '15.5', '16', '16.5', '17',
  ];

  const womenSizes = [
    8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5,
    16,
  ];
  const dispatch = useDispatch();

 

  return (
    <>
      <label htmlFor="sizes">{`Select US ${gender}`}</label>
      <div className="sizeButton">
        {gender === "men"
          ? menSizes.map((size) => {
              return (
                <button
                  type="submit"
                  value={size}
                  key={size}
                  onClick={(e) => dispatch(addSize(product.size = e.target.value))}
                >
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

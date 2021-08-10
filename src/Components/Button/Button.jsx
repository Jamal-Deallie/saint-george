import React from "react";
import './Button.css';

const Button = (props) => {
  const { children, type, ...other } = props;
  const className = type === "primary" ? "primary--btn" : "outline--btn";
  return (
    <button className={className} {...other}>
      {children}
    </button>
  );
};

export default Button;

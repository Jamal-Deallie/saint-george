import React from "react";
import Button from "../Button/Button";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing--content">
        <hr className="landing--border" />
        <h3>
          <span>&#9679;</span> Available Now
        </h3>
        <h1 className="landing--headline">Yeezy 450 Cloud White</h1>
        <Button type="primary">Shop Now</Button>
      </div>
    </div>
  );
};

export default Landing;

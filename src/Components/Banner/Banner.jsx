import React from "react";
import "./Banner.css";

const Banner = ({ src, alt, title, desc}) => (
    <div className="banner">
      <div className="banner--image">
        <img src={src} alt={alt} />
      </div>
      <div className="banner--content">
        <h1>{title} </h1>
        <span>{desc}</span>
      </div>
    </div>
  );


export default Banner;

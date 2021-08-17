import React from "react";
import { Link } from "react-router-dom";
import "./Subheader.css";

const Subheader = ({ subheader, src }) => {
  return (
    <div className="subheader">
      <h2>{subheader}</h2>
      <Link to={`/${src}`} className='subheader--btn'>
        <button>See all &#5171;</button>
      </Link>
    </div>
  );
};

export default Subheader;

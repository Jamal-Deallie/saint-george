import React, { useState } from "react";
import './SortDropDown.css';

const SortDropDown = () => {
  

    return (
      <div className="dropdown">
        <div className="dropdown--wrapper">
          <label htmlFor="sortOptions">Sort By:</label>
          <div className="dropdown--selection">
            <select name="sortProducts" id="sortProducts" className='dropdown--options'>
              <option value="">Default</option>
              <option value="">Oldest</option>
              <option value="">Newest</option>
              <option value="">Price Low</option>
              <option value="">Price High</option>
            </select>
          </div>
        </div>
      </div>
    );
};

export default SortDropDown;

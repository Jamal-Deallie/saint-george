import React from 'react';
import './Subheader.css';

const Subheader = ({ subheader }) => {
    return (
      <div className='subheader'>
        <h2>{subheader}</h2>
        <button>See all &#5171;</button>
      </div>
    );
};

export default Subheader;

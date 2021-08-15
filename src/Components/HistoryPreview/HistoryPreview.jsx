import React from "react";
import Button from "../../Components/Button/Button";
import "./HistoryPreview.css";


export const HistoryPreview = ({id, src, title, paragraph }) => {
  return (
    <div className='historyPreview' key={id}>
      <div className="historyPreview--img">
        <img src={src} alt={title} />
      </div>
      <div className="historyPreview--content">
        <h2>{title} </h2>
        <p>{paragraph}
        </p>
        <Button type="outline">Learn More</Button>
      </div>
    </div>
  );
};
 
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import Accordion from "../../Components/Accordion/Accordion";
import Button from '../../Components/Button/Button';
import AccordionModel from "../AccordionModel/AccordionModel";
import AccordionSize from "../AccordionSize/AccordionSize";
import AccordionPrice from "../AccordionPrice/AccordionPrice";
import AccordionYear from "../AccordionYear/AccordionYear";
import "./Filter.css";


const Filter = ({ results }) => {
  const [showFilter, setShowFilter] = useState(false);
  const toggle = () => setShowFilter(!showFilter);




  return (
    <div className="filter">
      <div onClick={toggle} className="filter--icon">
        <AiIcons.AiFillFunnelPlot />
        <span>Show Filter</span>
      </div>
      <div>
        <span>Results</span>
        <span>({results})</span>
      </div>
      <div
        className={
          showFilter ? "filter--options active" : "filter--options"
        }
      >
        <button onClick={toggle} className="filter--close_btn">
          &#88;
        </button>
        <h1>Filter</h1>

        
        <AccordionModel/>
        <AccordionSize gender="Men"/>


        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default Filter;

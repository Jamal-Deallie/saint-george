import React, { useState } from "react";

const AccordionPrice = () => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const toggleAccordion = () => setOpenAccordion(!openAccordion);
  return (
    <div>
      <button className="accordion"> Price</button>
      <div className="accordion--content">
        <label htmlFor="from">From:</label>
        <input type="text" id="from" name="from" />
        <label htmlFor="to">To:</label>
        <input type="text" id="to" name="to" />
      </div>
    </div>
  );
};

export default AccordionPrice;

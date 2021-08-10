import React, { useState } from "react";

const AccordionSize = ({ gender }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const toggleAccordion = () => setOpenAccordion(!openAccordion);


  const sizes = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

console.log(sizes(7.5, 20));

  return (
    <div>
      <button className="accordion"> {gender}'s Size</button>
      {openAccordion && (
        <div className="accordion--content">
          <input type="button" value={null} />
        </div>
      )}
    </div>
  );
};

export default AccordionSize;

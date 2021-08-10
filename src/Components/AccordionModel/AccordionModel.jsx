import React, { useState } from 'react';
import { YeezyModels as models } from "../../Shared/Filter_Items";

const AccordionModel = () => {

    const [openAccordion, setOpenAccordion] = useState(false);
    const toggleAccordion = () => setOpenAccordion(!openAccordion);

    return (
      <div>
        <div>
          <button
            className={openAccordion ? "accordion--active" : "accordion"}
            onClick={toggleAccordion}
          >
            {" "}
            Models
          </button>
          {openAccordion && (
            <div>
              {models.map(({ id, model }) => (
                <div className="accordion--content" key={id}>
                  <input type="radio" id={model} name="model" value={model} />
                  <label for={model}>{model}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}

export default AccordionModel;

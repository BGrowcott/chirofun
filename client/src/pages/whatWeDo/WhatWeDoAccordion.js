import WhatWeDoContent from "./WhatWeDoContent";

function WhatWeDoAccordion({ therapyTypes }) {
    return (
        <div>
            <div className="accordion" id="accordionWhatWeDo">
                {therapyTypes.map((it, index) => {
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#accord-${it.therapyTypeCode}`} aria-expanded="true" aria-controls={`accord-${it.therapyTypeCode}`}>
                                    <span className="text-dark fs-3 fw-bold josefinSans-text">{it.title}</span>
                                </button>
                            </h2>
                            <div id={`accord-${it.therapyTypeCode}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionWhatWeDo">
                                <div className="accordion-body">
                                    <WhatWeDoContent it={it}></WhatWeDoContent>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WhatWeDoAccordion;

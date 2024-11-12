import WhatWeDoContent from "./WhatWeDoContent";

function WhatWeDoAccordion({ therapyTypes }) {
    return (
        <div>
            <div className="accordion" id="accordionWhatWeDo">
                {therapyTypes.map((it, index) => {
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <a href="#head" className="text-decoration-none">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#accord-${it.therapyTypeCode}`} aria-expanded="false" aria-controls={`accord-${it.therapyTypeCode}`}>
                                    <span className="text-dark fs-3 fw-bold josefinSans-text">{it.title}</span>
                                </button></a>
                            </h2>
                            <div id={`accord-${it.therapyTypeCode}`} className={`accordion-collapse collapse`} data-bs-parent="#accordionWhatWeDo">
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

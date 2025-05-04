import WhatWeDoContent from "./WhatWeDoContent";
import { useParams } from "react-router"

function WhatWeDoTabs({therapyTypes}) {

    const params = useParams();

    function setActiveClass (param, typeCode, index) {
        if (param === typeCode) {
            return "active";
        }

        if (!param && index === 0) {
            return "active";
        }       
    };

    
    return (
        <div className="p-2 bg-secondary">
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {therapyTypes.map((it, index, array) => (
                    <li className="nav-item rounded-0" role="presentation" style={{ width: `${1/array.length*100}%` }} key={it.title}>
                        <button
                            className={`p-2 rounded-0 nav-link ${setActiveClass(params.therapy, it.therapyTypeCode, index)}`}
                            id={`${it.therapyTypeCode}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${it.therapyTypeCode}`}
                            type="button"
                            role="tab"
                            aria-controls={it.therapyTypeCode}
                            aria-selected="true"
                        >
                            <div className="d-flex flex-column">
                                <div className="card border-0 rounded-0">
                                    <img src={it.image} className="card-img-top rounded-0" alt={it.imageAlt} />
                                    <div className="card-body px-1">
                                        <h2 className={`card-text text-dark fw-bold josefinSans-text fs-5`}>{it.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content bg-white" id="myTabContent">
                {therapyTypes.map((it, index) => (
                    <div
                        className={`tab-pane fade show ${setActiveClass(params.therapy, it.therapyTypeCode, index)} p-xl-5 p-lg-3 pt-2 pt-xl-2`}
                        id={it.therapyTypeCode}
                        role="tabpanel"
                        aria-labelledby={`${it.therapyTypeCode}-tab`}
                        tabIndex={index}
                        key={it.title}
                    >
                        <div className="p-1">
                            <WhatWeDoContent it={it}></WhatWeDoContent>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default WhatWeDoTabs;
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TherapyCarousel from "./TherapyCarousel";
import WelcomeVideo from "./WelcomeVideo";

function WhatWeTreat() {
    const whatWeTreat = [
        "General, acute & chronic back ache & back pain (non-trauma)",
        "Sciatica",
        "Ankle Pain",
        "Cramp",
        "Elbow Pain",
        "Headache arising from the neck (Cervicogenic)",
        "Joint Pains including hip and knee pain from Osteoarthritis",
        "Generalised Aches and Pains",
        "Lumbago",
        "Mechanical neck pain",
        "Migraine prevention",
        "Some sports injuries depending on diagnosis",
        "Plantar fasciitis",
        "Rotator Cuff Injuries",
        "We also offer Orthotic fitting at affordable prices",
    ];

    return (
        <>
            <div className="carousel-section bg-dark border-top border-bottom border-5 border-secondary shadow-inset">
                <div className="container-md">
                    <div className="row flex-lg-row-reverse flex-column-reverse">
                        <div className="col-12 col-lg-7">
                            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-start py-3">
                                <h3 className="we-do-h3 fw-bold josefinSans-text text-light">What we treat</h3>
                                <div className="text-white fs-4">
                                    <p>
                                        Chiropractors treat conditions related to the musculoskeletal and nervous systems, focusing on issues with the spine, joints, and muscles.
                                        <br></br>
                                    </p>
                                </div>
                                <div className="pt-0 pt-lg-0">
                                    <ul className="fs-5 we-treat-list text-uppercase text-black list-group list-group-flush">
                                        {whatWeTreat.map((it, index) => (
                                            <li key={it} className="list-group-item bg-dark text-light fw-bold">
                                                <FontAwesomeIcon className="fs-4 text-success" icon={regular("circle-check")} /> {it}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <p className="text-white fs-5 pt-2">
                                        To find out more, please call us on{" "}
                                        <a className="text-white" href="tel:07898903772">
                                            07898 903772
                                        </a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 d-flex align-items-center">
                            <WelcomeVideo></WelcomeVideo>
                            {/* <TherapyCarousel></TherapyCarousel>
							<p className="text-white fs-5">
								Chiropractic care aims to improve mobility, relieve pain, and support the body's natural healing processes through manual
								adjustments and other therapeutic techniques.
							</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhatWeTreat;

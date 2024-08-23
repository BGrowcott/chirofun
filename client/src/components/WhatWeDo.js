import building from "../images/new-imgs/building-sign.jpg";
import therapy6 from "../images/new-imgs/therapy6.jpg";
import austin2 from "../images/new-imgs/austin2.jpg";
import WhatWeDoNav from "./WhatWeDoNav";

function WhatWeDo() {
    return (
        <div>
            <div className="row flex-row-reverse bg-light rounded align-items-center mt-3">
                <div className="col-12 col-md-6">
                    <div className="p-3 rounded">
                        <h3 className="fw-bold border-bottom josefinSans-text text-dark mb-1 mb-md-5">
                            What we do
                        </h3>
                        <p className="fs-4 lh-lg fw-bold">
                            Always evidence based.<br></br>
                            Fully <a className="text-black" href="https://www.gcc-uk.org/search/chiro_results?chiro_registration_number=03929" target="_blank"><abbr title="General Chiropractic Council">GCC</abbr> Registered.</a><br></br>
                            The best after care.<br></br>
                            Fast results.<br></br>
                        </p>
                        <p className="fs-5">
                            Experience personalised care with our
                            chiropractor-led treatments. We offer comprehensive
                            spinal manipulative techniques, hands-on therapies,
                            specialised treatments, and effective postural
                            correction to help you <span className="fw-bold">feel your best.</span>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid rounded"
                        src={austin2}
                        alt="Chiropractor Austin Everill standing and smiling in front of a poster that shows all the ailments he treats"
                    ></img>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default WhatWeDo;

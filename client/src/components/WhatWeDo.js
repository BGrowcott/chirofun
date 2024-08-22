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
                        <h3 className="fw-bold border-bottom josefinSans-text text-dark mb-5">
                            What we do
                        </h3>
                        <p className="fs-4 lh-lg">
                            Always evidence based.<br></br>
                            Fully GCC Registered.<br></br>
                            The best after care.<br></br>
                            Fast results.<br></br>
                        </p>
                        <p className="fs-5">
                            Experience personalized care with our
                            chiropractor-led treatments. We offer comprehensive
                            spinal manipulative techniques, hands-on therapies,
                            specialised treatments, and effective postural
                            correction to help you feel your best.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <img
                        className="img-fluid rounded"
                        src={austin2}
                        alt="Building"
                    ></img>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default WhatWeDo;

import building from "../images/new-imgs/building-sign.jpg";
import therapy6 from "../images/new-imgs/therapy6.jpg";
import austin from "../images/new-imgs/austin.jpg";
import WhatWeDoNav from "./WhatWeDoNav";

function WhatWeDo() {
  return (
    <div className="container-md">
      <div className="row flex-row-reverse my-5 pt-5 pb-5">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="rounded d-flex flex-column justify-content-center px-3">
            <h3 className="fw-bold josefinSans-text text-dark mb-1 mb-md-5 fs-1">
              What we do
            </h3>
            <p className="fs-3 lh-lg fw-bold mb-5">
              Always evidence based.<br></br>
              Fully{" "}
              <a
                className="text-black"
                href="https://www.gcc-uk.org/search/chiro_results?chiro_registration_number=03929"
                target="_blank"
              >
                <abbr title="General Chiropractic Council">GCC</abbr>{" "}
                Registered.
              </a>
              <br></br>
              The best after care.<br></br>
              Fast results.<br></br>
            </p>
            <p className="fs-4">
              Experience personalised care with our chiropractor-led treatments.
              We offer comprehensive spinal manipulative techniques, hands-on
              therapies, specialised treatments, and effective postural
              correction to help you{" "}
              <span className="fw-bold">feel your best.</span>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid austin-img"
            style={{ border: "1px solid #ffffff87" }}
            src={austin}
            alt="Chiropractor Austin Everill standing and smiling in front of a poster that shows all the ailments he treats"
          ></img>
        </div>
      </div>
      {/* <hr></hr> */}
    </div>
  );
}

export default WhatWeDo;

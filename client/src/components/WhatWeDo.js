import building from "../images/chiro-img.png";
import WhatWeDoNav from "./WhatWeDoNav";

function WhatWeDo() {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <div className="p-3">
                        <h3 className="fw-bold text-center">What we do</h3>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed lacinia, sapien a consectetur sodales,
                            metus lorem faucibus est, sit amet facilisis dolor
                            tortor a nisi. Integer pulvinar odio a nisi
                            facilisis, et rutrum neque commodo. Donec id finibus
                            ligula. Duis a elit dapibus, laoreet ipsum sit amet,
                            mollis justo. Vestibulum leo sapien, rutrum ac augue
                            eget, imperdiet tempor sapien. Ut pellentesque odio
                            at erat scelerisque varius.
                        </p>
                    </div>
                    {/* <div className="services row">
                    <div className="service-links-text col-11 d-flex flex-column justify-content-between">
                        <p className="service-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed lacinia, sapien a consectetur sodales,
                            metus lorem faucibus est, sit amet facilisis dolor
                            tortor a nisi. Integer pulvinar odio a nisi
                            facilisis, et rutrum neque commodo. Donec id finibus
                            ligula. Duis a elit dapibus, laoreet ipsum sit amet,
                            mollis justo. Vestibulum leo sapien, rutrum ac augue
                            eget, imperdiet tempor sapien. Ut pellentesque odio
                            at erat scelerisque varius.
                        </p>
                        <div className="links-container row">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <img src={foot}></img>
                                <p>Orthotics</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <img src={spine}></img>
                                <p>Chiropractic</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <img src={runner}></img>
                                <p>Sports Remedial</p>
                            </div>
                        </div>
                    </div>
                    <div className="new-link-container d-flex align-items-center col-1">
                        <div className="new-patient-link d-flex justify-content-center align-items-center">
                            <p>New Patient </p>
                        </div>
                    </div>
                </div> */}
                </div>
                <div className="col-12 col-md-6">
                    <img
                        className="img-fluid"
                        src={building}
                        alt="Building"
                    ></img>
                </div>
            </div>
            <hr></hr>

            <WhatWeDoNav></WhatWeDoNav>
        </div>
    );
}

export default WhatWeDo;

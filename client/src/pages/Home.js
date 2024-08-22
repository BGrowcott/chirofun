import cert1 from "../images/ClinicFiveStarTreatment.png";
import cert2 from "../images/BestRatedBirm.jpg";
import cert3 from "../images/GCC-Registered_black.png";
import austin from "../images/new-imgs/austin.jpg";
import office from "../images/doctors-office.jpg";
import Hero from "../components/Hero";
import OtherInfoNav from "../components/OtherInfoNav";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
    return (
        <section>
            <Hero></Hero>
            <div className="container-md">
                <hr></hr>
                <WhatWeDo></WhatWeDo>
                <hr></hr>
                <OtherInfoNav></OtherInfoNav>

        {/* <div className="mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="reviews">
                                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                                    <div className="review-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed lacinia, sapien a
                                        consectetur sodales, metus lorem
                                        faucibus est, sit amet facilisis dolor
                                        tortor a nisi.
                                    </div>
                                    <div className="reviewer-name">
                                        Tobie Tibbs
                                    </div>
                                    <div className="stars">Stars</div>
                                    <button className="more-reviews-button">
                                        More reviews &#10575;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" src={office}></img>
                        </div>
                    </div>
                </div> */}
                {/* TODO: Make this into it's own component */}
                <div className="row my-5">
                    <hr></hr>
                    <div className="col-12 col-md-9">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11244.49265846336!2d-1.900553370694333!3d52.422444694535756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0e681a7553%3A0x84836f9f82fbb006!2sBirmingham%20Chiropractic!5e0!3m2!1sen!2suk!4v1724069357491!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="text-center">
                        <span className="fw-bold">Opening Hours</span>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Monday: 9am-7pm</li>
                          <li className="list-group-item">Tuesday: 9am-7pm</li>
                          <li className="list-group-item">Wednesday: Closed</li>
                          <li className="list-group-item">Thrusday: 9am-7pm</li>
                          <li className="list-group-item">Friday: 9am-2pm</li>
                          <li className="list-group-item">Saturday: 9:30am-2pm</li>
                          <li className="list-group-item">Sunday: Closed</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

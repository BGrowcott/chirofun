import cert1 from "../images/ClinicFiveStarTreatment.png";
import cert2 from "../images/BestRatedBirm.jpg";
import cert3 from "../images/GCC-Registered_black.png";
import austin from "../images/austin.jpeg";
import office from "../images/doctors-office.jpg";
import Hero from "../components/Hero";
import OtherInfoNav from "../components/OtherInfoNav";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <section>
      <Hero></Hero>
      <div className="container-md">
        <div className="mt-5 mb-5">
          <div>
            <h2 className="h4 text-center">
              Welcome to Birmingham Chiropractic
            </h2>
            <div className="">
              <div
                className="border shadow me-2"
                style={{
                  backgroundImage: `url(${austin})`,
                  height: "150px",
                  width: "150px",
                  borderRadius: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundPositionY: "top",
                  backgroundPositionX: "left",
                  shapeOutside: "circle(50%)",
                  flex: "none",
                  float: "left",
                }}
              ></div>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia, sapien a consectetur sodales, metus lorem faucibus est,
                sit amet facilisis dolor tortor a nisi. Integer pulvinar odio a
                nisi facilisis, et rutrum neque commodo. Donec id finibus
                ligula. Duis a elit dapibus, laoreet ipsum sit amet, mollis
                justo. Vestibulum leo sapien, rutrum ac augue eget, imperdiet
                tempor sapien. Ut pellentesque odio at erat scelerisque varius.
              </p>
            </div>
          </div>
        </div>
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
        <div className="row mt-3">
          <hr></hr>
          <div className="col-12 col-md-9">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310858.6476642281!2d-2.145728242009912!3d52.50478425737822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0e681a7553%3A0x84836f9f82fbb006!2sBirmingham%20Chiropractic!5e0!3m2!1sen!2suk!4v1723897064336!5m2!1sen!2suk&zoom=1"
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

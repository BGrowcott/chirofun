import hero from "../images/flexible-back.jpg";
import cert1 from "../images/ClinicFiveStarTreatment.png";
import cert2 from "../images/BestRatedBirm.jpg";
import cert3 from "../images/GCC-Registered_black.png";
import team from "../images/team.jpg";
import contact from "../images/phone.avif";
import testimonials from "../images/testi.jpg";
import building from "../images/chiro-img.png";
import foot from "../images/foot.png";
import spine from "../images/spine-model-.jpg";
import runner from "../images/woman-running.jpg";
import office from "../images/doctors-office.jpg";

const Home = () => {
  return (
    <section>
      <div className="hero position-relative">
        <div
          className="hero-img"
          src={hero}
          style={{ backgroundImage: `url(${hero})` }}
        ></div>
        <div
          className="bg-light-fade position-absolute start-50 translate-middle p-2 rounded"
          style={{ top: "75%" }}
        >
          <div className="text-center">
            <h2 className="fw-bold">Welcome to Birmingham Chiropractic</h2>
            <p className="fw-bold">Outstanding back and neck care.</p>
            <div className="justify-content-around d-none d-md-flex">
              <img className="cert-logo" src={cert1}></img>
              <img className="cert-logo" src={cert2}></img>
              <img className="cert-logo" src={cert3}></img>
            </div>
            <a
              target="_blank"
              href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
              className="mt-1 btn btn-lg btn-primary"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="links-intro-container container flex-column">
        <div className="row">
          <h2 className="welcome-title justify-content-center">
            Welcome to Birmingham Chiropractic
          </h2>
          <p className="welcome-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lacinia, sapien a consectetur sodales, metus lorem faucibus est, sit
            amet facilisis dolor tortor a nisi. Integer pulvinar odio a nisi
            facilisis, et rutrum neque commodo. Donec id finibus ligula. Duis a
            elit dapibus, laoreet ipsum sit amet, mollis justo. Vestibulum leo
            sapien, rutrum ac augue eget, imperdiet tempor sapien. Ut
            pellentesque odio at erat scelerisque varius.
          </p>
        </div>
        <div className="row links">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div
              className="homepage-links"
              src={team}
              style={{ backgroundImage: `url(${team})` }}
              alt="Doctor"
            ></div>
            <p className="link-text">Meet the team</p>
          </div>
          <div className="col col1 d-flex flex-column align-items-center justify-content-center">
            <div
              className="homepage-links"
              src={testimonials}
              style={{ backgroundImage: `url(${testimonials})` }}
              alt="Doctor"
            ></div>
            <p className="link-text">Testimonials</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div
              className="homepage-links"
              src={contact}
              style={{ backgroundImage: `url(${contact})` }}
              alt="Doctor"
            ></div>
            <p className="link-text">Contact us</p>
          </div>
        </div>
      </div>

      <div className="row offer-services-container">
        <div className="col services-container d-flex justify-content-end align-items-end">
          <h3 className="col services-title">What we do</h3>
          <div className="services row d-flex">
            <div className="service-links-text col-11 d-flex flex-column justify-content-between">
              <p className="service-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia, sapien a consectetur sodales, metus lorem faucibus est,
                sit amet facilisis dolor tortor a nisi. Integer pulvinar odio a
                nisi facilisis, et rutrum neque commodo. Donec id finibus
                ligula. Duis a elit dapibus, laoreet ipsum sit amet, mollis
                justo. Vestibulum leo sapien, rutrum ac augue eget, imperdiet
                tempor sapien. Ut pellentesque odio at erat scelerisque varius.
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
          </div>
        </div>
        <div className="col-5 building-container">
          <img className="building" src={building} alt="Building"></img>
        </div>
      </div>
      <div className="reviews-office-img-container row">
        <div className="col reviews">
          <div className="reviews-container d-flex flex-column justify-content-center align-items-center">
            <div className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia, sapien a consectetur sodales, metus lorem faucibus est,
              sit amet facilisis dolor tortor a nisi.
            </div>
            <div className="reviewer-name">Tobie Tibbs</div>
            <div className="stars">Stars</div>
            <button className="more-reviews-button">
              More reviews &#10575;
            </button>
          </div>
        </div>
        <div className="col office-img-container">
          <img className="office-img" src={office}></img>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310858.6476642281!2d-2.145728242009912!3d52.50478425737822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0e681a7553%3A0x84836f9f82fbb006!2sBirmingham%20Chiropractic!5e0!3m2!1sen!2suk!4v1723897064336!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="cert-container row">
        <div className="col d-flex justify-content-center align-items-center">
          <img className="cert1" src={cert1}></img>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img className="cert2" src={cert2}></img>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img className="cert3" src={cert3}></img>
        </div>
      </div>
    </section>
  );
};

export default Home;

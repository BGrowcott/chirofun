import hero from "../images/flexible-back.jpg";
import cert1 from "../images/ClinicFiveStarTreatment.png";
import cert2 from "../images/BestRatedBirm.jpg";
import cert3 from "../images/GCC-Registered_black.png";
import team from "../images/team.jpg";
import contact from "../images/phone.avif";
import testimonials from "../images/testi.jpg";

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
      <div className="links-container container flex-column">
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
        <div className="row d-flex justify-content-center links">
          <div className="col">
            <div
              className="homepage-links"
              src={team}
              style={{ backgroundImage: `url(${team})` }}
              alt="Doctor"
            ></div>
            <p className="link-text">Meet the team</p>
          </div>
          <div className="col">
            <div
              className="homepage-links"
              src={testimonials}
              style={{ backgroundImage: `url(${testimonials})` }}
              alt="Doctor"
            ></div>
            <p className="link-text">Testimonials</p>
          </div>
          <div className="col">
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
    </section>
  );
};

export default Home;

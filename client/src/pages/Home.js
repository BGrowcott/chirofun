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
      <div className="links-container container">
        <div className="row">
          <h2 className="welcome-text">Welcome to Birmingham Chiropractic</h2>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="homepage-links"
              //   src={team}
              style={{ backgroundImage: `url(${team})` }}
              alt="Doctor"
            ></div>
          </div>
          <div className="col">
            <div
              className="homepage-links"
              //   src={testimonials}
              style={{ backgroundImage: `url(${testimonials})` }}
              alt="Doctor"
            ></div>
          </div>
          <div className="col">
            <div
              className="homepage-links"
              //   src={contact}
              style={{ backgroundImage: `url(${contact})` }}
              alt="Doctor"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

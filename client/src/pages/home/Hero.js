import hero2 from "../../images/hero2.5.jpg";

function Hero() {
  return (
    <div className="hero position-relative mb-5">
      <div
        className="hero-img"
        style={{ backgroundImage: `url(${hero2})` }}
      ></div>
      <div className="container-fluid p-0">
        <div className="row">
          <div
            className="position-absolute top-0 col-12 col-md-10 col-lg-9 col-xl-6"
            style={{
              height: "70vh",
              backgroundImage: "linear-gradient(to right, white, transparent)",
            }}
          >
            <div className="row h-100 d-flex align-items-center">
              <div className="p-5 col-12 col-md-8 col-lg-7">
                <div>
                  <h2 className="josefinSans-text text-dark">
                    <span className="text-black fs-1">Welcome to</span>{" "}
                    <br></br>
                    <span className="fw-bold hero-header-font">
                      Birmingham Chiropractic
                    </span>
                  </h2>
                  <p className="fs-3 d-none d-lg-block">
                    Outstanding back and neck care.
                  </p>
                  <p className="fs-5 d-none d-lg-block">
                    We strive to get you pain-free using safe, evidence-based,
                    and individually tailored treatment programs.
                    <span className="fw-bold">
                      We want you back to doing what you love.
                    </span>
                  </p>
                  <a
                    target="_blank"
                    href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
                    className="btn btn-lg btn-dark p-3"
                  >
                    Make an Appointment Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

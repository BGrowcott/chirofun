import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-5" style={{ color: "#F8F9F5" }}>
      <div
        className="text-center p-3 fs-4 bg-light"
        // style={{ backgroundColor: "#F8F9F5" }}
      >
        <a
          target="_blank"
          href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
          className="btn btn-lg btn-outline-dark"
        >
          Start Feeling Better Today!
        </a>
      </div>
      <div className="bg-dark p-5">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 col-md-4 d-none d-md-block px-5">
              <div className="d-flex flex-column">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    About Us
                  </li>
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    Testimonials
                  </li>
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 d-none d-md-block px-5">
              <div className="d-flex flex-column">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    Orthotics
                  </li>
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    Chiropractic
                  </li>
                  <li
                    className="list-group-item bg-transparent fs-5"
                    style={{ color: "#F8F9F5" }}
                  >
                    Sports Remedial
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="d-flex flex-column text-md-end fs-5">
                <div>
                  <p>
                    Chiropractic, 264 Alcester Rd South,
                    <br />
                    King's Heath,
                    <br />
                    Birmingham B14 6DR
                  </p>
                  <a className="text-white" href="tel:07898903772">
                    07898 903772
                  </a>{" "}
                  |{" "}
                  <a
                    className="text-white"
                    href="mail:info@birminghamchiropractic.uk.com"
                  >
                    info@birminghamchiropractic.uk.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light text-black text-center fw-bold p-1">
        © 2024 Birmingham Chiropractic Limited. All rights reserved. Designed by
        BenAz Webz.
      </div>
    </footer>
  );
};

export default Footer;

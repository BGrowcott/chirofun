import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container d-flex flex-column justify-content-center align-items-center text-white text-center p-2">
      <div className="footer-title-links-container">
        <h1 className="ms-3 h3 text-white fw-bold text-shadow">
          Birmingham Chiropractic
        </h1>
      </div>
      <div className="row footer-info-container d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="footer-info">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="footer-info">
            <h4>Services</h4>
            <ul>
              <li>Orthotics</li>
              <li>Chiropractic</li>
              <li>Sports Remedial</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="footer-info">
            <h4>Contact</h4>
            <div>
              <p>
                Chiropractic, 264 Alcester Rd S, King's Heath, Birmingham B14
                6DR
              </p>
              <p>07898 903772</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="footer-info">
            <h4>Opening Hours</h4>
            <ul>
              <li className="hours">
                <p>Monday</p>
                <p>9am-7pm</p>
              </li>
              <li className="hours">
                <p>Tuesday</p>
                <p>9am-7pm</p>
              </li>
              <li className="hours">
                <p>Wednesday</p>
                <p>Closed</p>
              </li>
              <li className="hours">
                <p>Thrusday</p>
                <p>9am-7pm</p>
              </li>
              <li className="hours">
                <p>Friday</p>
                <p>9am-2pm</p>
              </li>
              <li className="hours">
                <p>Saturday</p>
                <p>9:30am-2pm</p>
              </li>
              <li className="hours">
                <p>Sunday</p>
                <p>Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

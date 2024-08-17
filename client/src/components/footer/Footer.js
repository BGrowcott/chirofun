import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-container text-white p-2">
          <div className="container">
            <div className="row text-center">
                <div className="col-4">
                    <div className="d-flex flex-column">
                        <p className="fw-bold">Quick Links</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">About Us</li>
                            <li className="list-group-item bg-transparent text-white">Services</li>
                            <li className="list-group-item bg-transparent text-white">Testimonials</li>
                            <li className="list-group-item bg-transparent text-white">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex flex-column">
                        <p className="fw-bold">Services</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">Orthotics</li>
                            <li className="list-group-item bg-transparent text-white">Chiropractic</li>
                            <li className="list-group-item bg-transparent text-white">Sports Remedial</li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex flex-column">
                        <p className="fw-bold">Contact</p>
                        <div>
                            <p>
                                Chiropractic, 264 Alcester Rd South, <br /> 
                                King's Heath, <br />
                                Birmingham B14 6DR
                            </p>
                            <a className="text-white" href="tel:07898903772">07898 903772</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;

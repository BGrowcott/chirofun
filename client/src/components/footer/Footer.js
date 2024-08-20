import "./footer.css";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="bg-light text-center p-2">
                <a
                    target="_blank"
                    href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
                    className="btn btn-lg btn-outline-dark"
                >
                    Start Feeling Better Today!
                </a>
            </div>
            <div className="footer-container p-2">
                <div className="">
                    <div className="row gx-5 justitfy-content-around text-center">
                        <div className="col-12 col-md-4 d-none d-md-block px-5">
                            <div className="d-flex flex-column">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-transparent text-white">
                                        About Us
                                    </li>
                                    <li className="list-group-item bg-transparent text-white">
                                        Testimonials
                                    </li>
                                    <li className="list-group-item bg-transparent text-white">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block px-5">
                            <div className="d-flex flex-column">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-transparent text-white">
                                        Orthotics
                                    </li>
                                    <li className="list-group-item bg-transparent text-white">
                                        Chiropractic
                                    </li>
                                    <li className="list-group-item bg-transparent text-white">
                                        Sports Remedial
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 px-5">
                            <div className="d-flex flex-column text-md-end">
                                <div>
                                    <p>
                                        Chiropractic, 264 Alcester Rd South,<br />
                                        King's Heath,<br />
                                        Birmingham B14 6DR
                                    </p>
                                    <a
                                        className="text-white"
                                        href="tel:07898903772"
                                    >
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
            <div className="bg-light text-dark text-center fw-bold p-1">
                © 2024 Birmingham Chiropractic Limited. All rights reserved.
                Designed by BenAz Webz.
            </div>
        </footer>
    );
};

export default Footer;

import { Link } from "react-router-dom";
import "./footer.css";
import MapAndOpeningTimesFoot from "./MapAndOpeningTimesFoot";

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer className="mt-3 mt-lg-5" style={{ color: "#F8F9F5" }}>
            {/* <div className="text-center p-3 fs-4" style={{ backgroundColor: "#F0EFEF" }}>
                <a target="_blank" href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true" className="btn btn-lg btn-outline-dark">
                    Start Feeling Better Today!
                </a>
            </div> */}
            <div className="bg-dark p-lg-4 border-top border-bottom border-10 border-secondary shadow-inset">
                <div className="container-fluid">
                    <div className="row text-center align-items-center">
                        <div className="col-12">
                            <MapAndOpeningTimesFoot></MapAndOpeningTimesFoot>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light text-black text-center fw-bold p-1">
                © {year} Birmingham Chiropractic Limited. All rights reserved. Designed by <a className="text-dark" href="mailto:bengrowcott@gmail.com">BG-Coding</a>.
                <br></br>
                <Link to={"/privacy-policy"} className="text-muted">
                    View Privacy Policy
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

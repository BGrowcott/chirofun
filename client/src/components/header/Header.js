import { Link } from "react-router-dom";
import { SHOW_MODAL_EXAMPLE } from "../../utils/actions";
import AuthService from "../../utils/AuthService";
import { useGlobalContext } from "../../utils/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../images/logo_curve.png";

const Header = () => {
  const [state, dispatch] = useGlobalContext();

  function toggleModalExample() {
    dispatch({ type: SHOW_MODAL_EXAMPLE });
  }

  return (
    <header id="head">
      <nav className="navbar navbar-expand-xl navbar-light py-0 px-md-4 px-0 bg-light">
        <div className="container-fluid ps-0">
          <Link className="navbar-brand  d-flex align-items-center" to={"/"}>
            <img width={"70"} src={logo} alt="Birmingham Chiropractic Logo" />
            <h1 className="ms-1 ms-md-3 h2 text-dark fw-bold josefinSans-text">
              <span className="d-block">Birmingham</span> Chiropractic
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center text-uppercase fs-4 mb-3 mb-xl-0">
              <li className="nav-item navDropDownContainer">
                <Link className="nav-link mx-xl-4 mx-lg-2" to={"/what-we-do"}>
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    What We Do
                  </div>
                </Link>
                <div className="navDropDownContents d-none d-xl-block bg-light rounded">
                  <div className="px-3">
                    <Link to={"/what-we-do/chiropractic"} className="nav-link">
                      Chiropractic
                    </Link>
                    <Link
                      to={"/what-we-do/neuromodulator-treatments"}
                      className="nav-link"
                    >
                      Neuromodulator Treatments
                    </Link>
                    <Link
                      to={"/what-we-do/vitamin-therapy"}
                      className="nav-link"
                    >
                      Vitamin Therapy
                    </Link>
                    <Link to={"/what-we-do/yoga"} className="nav-link">
                      Yoga
                    </Link>
                    <Link
                      to={"/what-we-do/sports-massage"}
                      className="nav-link"
                    >
                      Sports Massage
                    </Link>
                    <Link to={"/what-we-do/orthotics"} className="nav-link">
                      Orthotics
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-xl-4 mx-lg-2" to={"/the-team"}>
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Meet The Team
                  </div>
                </Link>
              </li>
              <li className="nav-item mx-xl-4 mx-lg-2">
                <Link className="nav-link" to={"/fees"}>
                  <div
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Fees
                  </div>
                </Link>
              </li>
              <li className="nav-item ms-xl-4 ms-lg-2">
                <div className="d-flex flex-column mb-3 mb-lg-0">
                  <a
                    className="nav-link pb-0 mb-1 border-bottom"
                    href="tel:07898903772"
                  >
                    Call: 07898 903772
                  </a>
                  <a
                    href={state.bookingUrl}
                    target="_blank"
                    className="btn btn-outline-dark"
                  >
                    Book Online
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { SHOW_MODAL_EXAMPLE } from "../utils/actions";
import AuthService from "../utils/AuthService";
import { useGlobalContext } from "../utils/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../images/logo_curve_512.png";

const Header = () => {
    const [state, dispatch] = useGlobalContext();

    function toggleModalExample() {
        dispatch({ type: SHOW_MODAL_EXAMPLE });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light p-0">
                <div className="container-fluid ps-0">
                    <Link
                        className="navbar-brand p-0 d-flex align-items-center"
                        to={"/"}
                    >
                        <img width={"70"} src={logo} />
                        <h1 className="ms-3 h2 text-dark fw-bold josefinSans-text">
                            <span className="d-block">Birmingham</span>{" "}
                            Chiropractic
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
                        <ul className="navbar-nav align-items-center text-uppercase fs-5">
                            <li className="nav-item navDropDownContainer">
                                <Link
                                    className="nav-link mx-xl-5 mx-lg-3"
                                    to={"/portfolio"}
                                >
                                    What We Do
                                </Link>
                                <div
                                    className="navDropDownContents d-none d-sm-block rounded"
                                    style={{
                                        backgroundColor: "rgb(214 240 255)",
                                        zIndex: "1",
                                    }}
                                >
                                    <a className="nav-link">Orthotics</a>
                                    <a className="nav-link">Chiropractic</a>
                                    <a className="nav-link">Sports Remedial</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link mx-xl-5 mx-lg-3"
                                    to={"/about"}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item mx-xl-5 mx-lg-3">
                                <Link className="nav-link" to={"/contact"}>
                                    Get In Touch
                                </Link>
                            </li>
                            <li className="nav-item me-xl-5 me-lg-3">
                                <ul
                                    style={{ fontSize: "1.25rem" }}
                                    className="d-flex list-unstyled"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href=""
                                            target="_blank"
                                        >
                                            <div className="nav-brand-container">
                                                <FontAwesomeIcon
                                                    className="fw-bold fa-lg"
                                                    icon={brands("instagram")}
                                                />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mx-3 nav-item">
                                        <a
                                            className="nav-link"
                                            href=""
                                            target="_blank"
                                        >
                                            <div className="nav-brand-container">
                                                <FontAwesomeIcon
                                                    className="fw-bold fa-lg"
                                                    icon={brands("youtube")}
                                                />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href=""
                                            target="_blank"
                                        >
                                            <div className="nav-brand-container">
                                                <FontAwesomeIcon
                                                    className="fw-bold fa-lg"
                                                    icon={brands("linkedin")}
                                                />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

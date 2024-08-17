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
            <nav
                className="navbar navbar-expand-sm navbar-light p-0"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #81cedf, #d6f0ff 40%)",
                }}
            >
                <div className="container-fluid ps-0">
                    <Link
                        className="navbar-brand p-0 d-flex align-items-center"
                        to={"/"}
                    >
                        <img width={"50"} src={logo} />
                        <h1 className="ms-3 h3 text-white fw-bold text-shadow">
                            Birmingham Chiropractic
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
                        <ul className="navbar-nav align-items-center text-uppercase">
                            <li className="nav-item navDropDownContainer">
                                <Link className="nav-link" to={"/portfolio"}>
                                    What We Do
                                </Link>
                                <div
                                    className="navDropDownContents d-none d-sm-block rounded"
                                    style={{ backgroundColor: "rgb(214 240 255)", zIndex: "1" }}
                                >
                                    <a className="nav-link">drop option</a>
                                    <a className="nav-link">drop option</a>
                                    <a className="nav-link">drop option</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>
                                    Get In Touch
                                </Link>
                            </li>
                            <li className="nav-item">
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
                                            <FontAwesomeIcon
                                                className="fw-bold"
                                                icon={brands("instagram")}
                                            />
                                        </a>
                                    </li>
                                    <li className="mx-3 nav-item">
                                        <a
                                            className="nav-link"
                                            href=""
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                className="fw-bold"
                                                icon={brands("youtube")}
                                            />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href=""
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                className="fw-bold"
                                                icon={brands("linkedin")}
                                            />
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

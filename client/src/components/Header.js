import { Link } from "react-router-dom";
import { SHOW_MODAL_EXAMPLE } from "../utils/actions";
import AuthService from "../utils/AuthService";
import { useGlobalContext } from "../utils/GlobalState";
import logo from "../images/Ossie+Logo-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = () => {
    const [state, dispatch] = useGlobalContext();

    function toggleModalExample() {
        dispatch({ type: SHOW_MODAL_EXAMPLE });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img width={"50"} src={logo} />
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
                        <ul className="navbar-nav text-uppercase">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/portfolio"}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>
                                    Get In Touch
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    aria-disabled="true"
                                >
                                    <FontAwesomeIcon
                                        className="fw-bold"
                                        icon={brands("instagram")}
                                    />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    aria-disabled="true"
                                >
                                    <FontAwesomeIcon
                                        className="fw-bold"
                                        icon={brands("youtube")}
                                    />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    aria-disabled="true"
                                >
                                    <FontAwesomeIcon
                                        className="fw-bold"
                                        icon={brands("linkedin")}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

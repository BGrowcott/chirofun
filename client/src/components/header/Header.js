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
			<div className="bg-dark text-light p-1 pt-0">
				<ul className="navbar-nav align-items-center text-uppercase">
					<li className="nav-item ms-xl-4 ms-lg-2 fs-6">
						<div className="d-flex flex-column text-center">
							<a className="nav-link pb-0 mb-1 border-bottom" href={state.bookingUrl} target="_blank">
								New Patient Offer £55 for consultation & treatment
							</a>
							<div>
								<a href={state.bookingUrl} target="_blank" className="fs-6 btn btn-sm btn-light p-1">
									Get the offer
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<nav className="navbar navbar-expand-xl navbar-light py-0 px-md-4 px-0 bg-light">
				<div className="container-fluid ps-0">
					<Link className="navbar-brand  d-flex align-items-center" to={"/"}>
						<img width={"60"} src={logo} alt="Birmingham Chiropractic Logo" />
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
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav align-items-center text-uppercase fs-4 mb-3 mb-xl-0">
							<li className="nav-item navDropDownContainer">
								<Link className="nav-link mx-xl-4 mx-lg-2" to={"/what-we-do"}>
									<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
										What We Do
									</div>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-xl-4 mx-lg-2" to={"/the-team"}>
									<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
										Meet The Team
									</div>
								</Link>
							</li>
							<li className="nav-item mx-xl-4 mx-lg-2">
								<Link className="nav-link" to={"/fees"}>
									<div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
										Fees
									</div>
								</Link>
							</li>
							<li className="nav-item ms-xl-4 ms-lg-2">
								<div className="d-flex flex-column mb-3 mb-lg-0">
									<a className="nav-link pb-0 mb-1 border-bottom" href="tel:07898903772">
										Call: 07898 903772
									</a>
									<a href={state.bookingUrl} target="_blank" className="btn btn-outline-dark">
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

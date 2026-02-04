import hero2 from "../../images/hero2.5.jpg";
import hero3 from "../../images/mainBuilding4x3.jpeg";
import hero4 from "../../images/mainBuilding3x2.jpeg";
import { useGlobalContext } from "../../utils/GlobalState";

function Hero() {
	const [state] = useGlobalContext();

	return (
		<section className="hero position-relative">
			<div className="hero-img"></div>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="position-absolute top-0 col-12 col-md-10 col-lg-9 col-xxl-6 hero-overlay">
						<div className="row h-100 d-flex align-items-md-center">
							<div className="p-5 col-12 col-md-8 col-xxl-7 d-flex flex-column justify-content-md-between">
								<div>
									<h2 className="josefinSans-text text-dark">
										<span className="text-black fs-1">Welcome to</span>
										<br></br>
										<span className="fw-bold hero-header-font">Birmingham Chiropractic</span>
									</h2>
									<p className="fw-bold fs-3">Excellence in Patient Care Since 2012</p>
									<p className="fs-5 d-none d-lg-block">
										Evidence based and Individually tailored treatment programs.
										<span className="fw-bold">Get back to doing what you love.</span>
									</p>
								</div>
								<div>
									<a target="_blank" href={state.bookingUrl} className="d-none d-md-block btn btn-lg btn-dark p-3">
										Make an Appointment Today!
									</a>
									<a target="_blank" href={state.bookingUrl} className="d-md-none btn btn-dark p-2">
										Make an Appointment Today!
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;

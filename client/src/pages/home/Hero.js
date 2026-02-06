import { useGlobalContext } from "../../utils/GlobalState";

function Hero() {
	const [state] = useGlobalContext();

	return (
		<section className="hero position-relative">
			<div className="hero-img"></div>
			<div className="container-fluid p-0">
				<div className="">
					<div className="position-absolute top-0 bg-transparent w-100 p-2">
						<div className="h-100 d-flex align-items-md-center">
							<div className="px-5 d-flex flex-column justify-content-md-between">
								<div>
									{/* <h2 className="josefinSans-text text-dark">
										<span className="text-black fs-1">Welcome to</span>
										<br></br>
										<span className="fw-bold hero-header-font">Birmingham Chiropractic</span>
									</h2> */}
									<p className="mb-1 fw-bold fs-3">Excellence in Patient Care Since 2012</p>
									<p className="mb-1 fs-5 d-none d-lg-block">
										Evidence based and Individually tailored treatment programs.
										<span className="fw-bold">Get back to doing what you love.</span>
									</p>
								</div>
								<div className="d-inline">
									{/* <a target="_blank" href={state.bookingUrl} className="d-none d-md-inline btn btn-lg btn-dark p-3">
										Make an Appointment Today!
									</a> */}
									<a target="_blank" href={state.bookingUrl} className="btn btn-dark p-2">
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

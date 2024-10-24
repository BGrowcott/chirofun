import TherapyCarousel from "./TherapyCarousel";

function WhatWeTreat() {
	const whatWeTreat = ["Lower Back Pain", "Siatica", "New Pain", "Headaches", "Shoulder Pain", "Hip/Knee Arthritis", "Tennis Elbow"];

	return (
		<>
			<div className="carousel-section bg-dark">
				<div className="container-md py-lg-5">
					<div className="row">
						<div className="col-12 col-lg-5">
							<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-start py-3 py-lg-0">
								<h3 className=" we-do-h3 fw-bold josefinSans-text text-light">What we treat</h3>
								<div className="p-2 pt-0 p-lg-4 pt-lg-0">
									<ul className="fs-3 we-treat-list text-uppercase text-black list-group list-group-flush">
										{whatWeTreat.map((it, index) => (
											<li key={it} className="list-group-item bg-dark text-light">
												{it}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-7 ">
							<TherapyCarousel></TherapyCarousel>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhatWeTreat;

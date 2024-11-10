import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TherapyCarousel from "./TherapyCarousel";

function WhatWeTreat() {
	const whatWeTreat = ["Lower Back Pain", "Sciatica", "Neck Pain", "Headaches", "Shoulder Pain", "Hip/Knee Arthritis", "Tennis Elbow"];

	return (
		<>
			<div className="carousel-section bg-dark border-top border-bottom border-5 border-secondary">
				<div className="container-md py-lg-5">
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-start py-3 py-lg-0">
								<h3 className="we-do-h3 fw-bold josefinSans-text text-light">What we treat</h3>
								<div className="text-white fs-5">
									<p>
										Chiropractors treat conditions related to the musculoskeletal and nervous systems, focusing on issues with the spine,
										joints, and muscles.
									</p>
								</div>
								<div className="pt-0 pt-lg-0">
									<ul className="fs-4 we-treat-list text-uppercase text-black list-group list-group-flush">
										{whatWeTreat.map((it, index) => (
											<li key={it} className="list-group-item bg-dark text-light">
												<FontAwesomeIcon className="fs-3 text-success" icon={regular("circle-check")} /> {it}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6 ">
							<TherapyCarousel></TherapyCarousel>
							<p className="text-white fs-5">
								Chiropractic care aims to improve mobility, relieve pain, and support the body's natural healing processes through manual
								adjustments and other therapeutic techniques.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhatWeTreat;

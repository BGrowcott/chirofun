import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TherapyCarousel from "./TherapyCarousel";
import WelcomeVideo from "./WelcomeVideo";
import treatmentCaro1 from "../../images/treatCaro1.jpeg";
import treatmentCaro2 from "../../images/whatWeTreatCaro22.jpg";
import clinic3 from "../../images/clinic3.jpeg";

function WhatWeTreat2() {
	const whatWeTreat = [
		[
			"General, acute & chronic back ache & back pain (non-trauma)",
			"Sciatica",
			"Ankle Pain",
			"Cramp",
			"Elbow Pain",
			"Headache arising from the neck (Cervicogenic)",
			"Joint Pains including hip and knee pain from Osteoarthritis",
		],
		[
			"Generalised Aches and Pains",
			"Lumbago",
			"Mechanical neck pain",
			"Migraine prevention",
			"Some sports injuries depending on diagnosis",
			"Plantar fasciitis",
			"Rotator Cuff Injuries",
		],
	];

    const imageWidth33 = {
        width: "33.333333333333333%",
    };

	return (
		<>
			<section className="bg-dark border-top border-bottom border-10 border-secondary shadow-inset">

            <div>
				<div className="d-none d-md-flex">
					<img style={imageWidth33} src={treatmentCaro1}></img>
					<img className="border-start border-end border-2 border-white" style={imageWidth33} src={treatmentCaro2}></img>
					<img style={imageWidth33} src={clinic3}></img>
				</div>
				<div className="d-flex d-md-none">
					<div id="whatWeTreatCarousel" class="carousel slide">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src={treatmentCaro1} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src={treatmentCaro2} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src={clinic3} class="d-block w-100" alt="..." />
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#whatWeTreatCarousel" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#whatWeTreatCarousel" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>

				<div className="container-md">
					<div className="">
						<div className="">
							<div className="py-2 pb-lg-5 pt-lg-3">
								<h3 className="we-do-h3 fw-bold josefinSans-text text-light w-100">What we treat</h3>
								<div className="text-white fs-5">
									<p>
										Our evidence-based clinic keeps current with the latest clinical research and techniques. We use the most up-to-date
										orthopaedic testing to find the underlying cause of your symptoms and fast-track MRI and X-Ray scanning if necessary. We
										provide our patients with first-class care to achieve the fastest results.
										<br></br>
									</p>
								</div>
								<div className="row">
									{whatWeTreat.map((item, i) => (
										<div key={i} className="col-12 col-md-6">
											<ul className="fs-5 we-treat-list text-uppercase text-black list-group list-group-flush">
												{item.map((it) => (
													<li key={it} className="list-group-item bg-dark text-light fw-bold px-0 px-md-2">
														<div className="d-flex align-items-center">
															<div className="me-2">
																<FontAwesomeIcon className="fs-3 text-success" icon={regular("circle-check")} />
															</div>
															<div className="">{it}</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default WhatWeTreat2;

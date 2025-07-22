import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import treatmentCaro1 from "../../images/treatCaro1.jpeg";
import treatmentCaro2 from "../../images/whatWeTreatCaro22.jpg";
import clinic3 from "../../images/clinic3.jpeg";
import HomePageCarousel from "./HomePageCarousel";

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

	const carouselImages = [
		{image: treatmentCaro1, alt: "Dr Austin carrying out Chiropratic treatment on a woman to help with lower back pain", active: true},
		{image: treatmentCaro2, alt: "Dr Austin carrying out Chiropratic treatment on a woman to help neck pain"},
		{image: clinic3, alt: "Dr Austin carrying out Chiropratic treatment on a man to help with back pain"}
	]

	return (
		<>
			<section className="bg-dark border-top border-bottom border-10 border-secondary shadow-inset">

            	<HomePageCarousel id={"whatWeTreatCarousel"} images={carouselImages}/>

				<div className="container-md">
					<div className="">
						<div className="">
							<div className="py-2 pb-lg-5 pt-lg-3">
								<h3 className="we-do-h3 fw-bold josefinSans-text text-light w-100">What we treat</h3>
								<div className="text-white fs-5">
									<p>
										Our evidence-based clinic keeps current with the latest clinical research and techniques. We use the most up-to-date
										orthopaedic testing and fast-track MRI and X-Ray scanning if necessary. We
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

import clinic1 from "../../images/clinic1.jpeg";
import clinic2 from "../../images/clinic2.jpeg";
import clinic3 from "../../images/clinic3.jpeg";
import clinic4 from "../../images/clinic4.jpeg";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imageWidth33 = {
	width: "33.333333333333333%",
};

const imageWidth50 = {
	width: "50%",
};

const OurClinic = (props) => {
	return (
		<section>
			<div className="d-none d-md-flex">
				<img style={imageWidth33} src={clinic1}></img>
				<img className="border-start border-end border-2 border-white" style={imageWidth33} src={clinic2}></img>
				<img style={imageWidth33} src={clinic4}></img>
			</div>
			<div className="d-flex d-md-none">
				<div id="clinicCarousel" class="carousel slide">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src={clinic1} class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src={clinic2} class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src={clinic4} class="d-block w-100" alt="..." />
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#clinicCarousel" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#clinicCarousel" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			<div className="container-md">
				<figure class="text-center mt-2">
					<blockquote class="blockquote">
						<p class="fs-5">
							<FontAwesomeIcon className="fs-5 text-black" icon={solid("quote-left")} />
							<em className="mx-2">From the moment I walked in, the atmosphere was warm and welcoming. The staff was friendly and professional, and I felt comfortable
							right away.</em>
							<FontAwesomeIcon className="fs-5 text-black" icon={solid("quote-right")} />
						</p>
					</blockquote>
				</figure>
				<div className="py-2 pb-lg-5 pt-lg-3">
					<div className="">
						<div className="">
							<div className="">
								<h3 className="we-do-h3 fw-bold josefinSans-text text-dark">Our clinic</h3>

								<div className="fs-5">
									<p>
										<span className="fs-4">Start your journey to being pain-free with our friendly team at our clinic in Kings Heath.</span>
										<br />
										We offer personalised, tailored and professional care for each patient. We pride ourselves on listening to our patients'
										needs and taking our time to help you choose the right treatment options. We offer more gentle treatments for those who
										need them. Caring for all our patients, young and old. We offer many manual treatment modalities and the latest
										technology to get you back to an active, pain-free life.
									</p>
									<p>
										At Birmingham Chiropractic we treat the underlying causes of your condition and provide full aftercare advice,
										rehabilitation programs, following you on your journey to pain-free. We are proud of our high success rate and have been
										rated as one of the top-performing clinics in Birmingham for the last 12 years. Expert chiropractic care in a friendly
										environment. <strong>Putting you first.</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurClinic;

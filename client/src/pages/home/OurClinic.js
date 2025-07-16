import clinic1 from "../../images/clinic1.jpeg";
import clinic2 from "../../images/clinic2.jpeg";
import clinic3 from "../../images/clinic3.jpeg";
import clinic4 from "../../images/clinic4.jpeg";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePageCarousel from "./HomePageCarousel";

const OurClinic = (props) => {

	const carouselImages = [
		{image: clinic1, alt: "Dr Austin talks through a diagnosis with a patient", active: false},
		{image: clinic2, alt: "Claire Corfield goes through a treatment plan with a patient", active: true},
		{image: clinic4, alt: "Dr Austin carrying out Chiropratic treatment", active: false}
	]

	return (
		<section>

			<HomePageCarousel id={"clinicCarousel"} images={carouselImages} />

			<div className="container-md">
				<figure className="text-center mt-2">
					<blockquote className="blockquote">
						<p className="fs-5">
							<FontAwesomeIcon className="fs-5 text-black" icon={solid("quote-left")} />
							<em className="mx-2">
								From the moment I walked in, the atmosphere was warm and welcoming. The staff were friendly and professional, and I felt
								comfortable right away.
							</em>
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
										rehabilitation programs, following you on your journey to being pain-free. We are proud of our high success rate and have been
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

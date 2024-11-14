import therapy3 from "../../images/new-imgs/therapy3.jpg";
import therapy4 from "../../images/new-imgs/therapy4.jpg";
import therapy5 from "../../images/new-imgs/therapy5.jpg";
import therapy6 from "../../images/new-imgs/therapy6.jpg";
import therapy7 from "../../images/new-imgs/therapy7.jpg";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhatToExpect() {
	const nodes = [
		{
			title: "Consultation",
			description:
				"Your first appointment will involve a full consultation and assessment. We provide a confidential report of findings, offer adivce, a free refferal if needed and complete rehabilitation program.",
			image: therapy7,
			icon: <FontAwesomeIcon className="text-success" icon={solid("stethoscope")} />
		},
		{
			title: "Assessment",
			description: "Full examination of the spine, orthopedic & neurological assessments, gait & postural analysis.",
			image: therapy4,
			icon: <FontAwesomeIcon className="text-success" icon={solid("list-check")} />
		},
		{
			title: "Personal Treatment Plan",
			description: "We will put your treatment into effect and do all the things we do to help you feel better.",
			image: therapy5,
			icon: <FontAwesomeIcon className="text-success" icon={solid("kit-medical")} />
		},
		{
			title: "Follow up",
			description:
				"As your treatment continues we will regulary reassess and make sure your are getting everything you need. We provide comprehensive after care to keep you tip top.",
			image: therapy6,
			icon: <FontAwesomeIcon className="text-success" icon={solid("person-hiking")} />
		},
	];

	return (
		<div className="container-md">
			<div className="py-2 py-lg-5">
				<h3 className="we-do-h3 fw-bold py-3 josefinSans-text text-dark">What To Expect</h3>
				<div className="row">
					{nodes.map((it, index, array) => {
						return (
							<div key={it.title} className="col-12 col-lg-6 col-xl-3 border p-0">
								<div className="bg-white">
									<div className="bg-light text-center fw-bold p-2 fs-5 mb-2">{it.title} {it.icon}</div>
									<div
										style={{
											height: "300px",
											width: "300px",
											borderRadius: "50%",
											background: `url(${it.image})`,
											backgroundPosition: "center center",
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
										}}
										className="white-border shadow m-auto"
									>
										<div
											style={{ height: "50px", width: "50px", left: "15px", top: "5px" }}
											className="position-relative rounded-circle bg-dark border border-5 border-secondary shadow-strong justify-content-center text-white d-flex align-items-center"
										>
											<span className="fs-3">{index + 1}</span>
										</div>
									</div>
									<div className="fs-5 p-3">{it.description}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default WhatToExpect;

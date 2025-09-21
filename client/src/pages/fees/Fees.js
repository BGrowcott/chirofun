import PageHeader from "../../components/utils/PageHeader";
import therapy5x4 from "../../images/therapy5x4.jpg";
import other5x4 from "../../images/test.jpeg";
import botox1 from "../../images/botox1.jpeg";
import reception1 from "../../images/reception1.jpeg"
import chiroFriend from "../../images/feesPage1.jpeg"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import PageContainer from "../../components/utils/PageContainer";
import ContentBox from "../../components/utils/ContentBox";
import { useGlobalContext } from "../../utils/GlobalState";

function Fees() {
	useEffect(() => {
		document.title = "Fees - Birmingham Chiropractic";
	}, []);

	const [state, dispatch] = useGlobalContext();

	const firstExamList = [
		"Full consultation & Treatment with a Chiropractor",
		"Full examination of the spine",
		"Orthopedic & neurological assessments",
		"Gait & postural analysis",
		"Confidential Report of Findings",
		"Explanation of treatment procedure",
		"Free referral to appropriate specialist if required",
		"Advice on exercise & diet",
		"Complete rehabilitation program",
	];

	return (
		<PageContainer>
			<PageHeader text={"Fees"}></PageHeader>
			<ContentBox>
				<div className="row">
					<div className="col-12 mb-3">
						<div className="p-1 p-md-3 white-border shadow bg-offLight">
							<div className="d-flex justify-content-center">
								<h3 className="h1 josefinSans-text text-dark">New Patient</h3>								
							</div>
							<p className="fs-2 fw-bold text-center">£55 Consultation & Treatment Includes:</p>
							<div className="container-fluid">
								<div className="row align-items-center">
									<div className="col-12 col-lg-6">
										<div className="d-none d-lg-block">
											<img
												className="w-100 border border-5"
												src={reception1}
												alt="A patient is sitting the bright reception of Birmingham Chiropractic. The patient is having a friendly chat with the receptionist."
											></img>
										</div>
									</div>
									<div className="col-12 col-lg-6 bg-offLight">										
										<ul className="fs-5 text-black list-group list-group-flush">
											{firstExamList.map((it) => (
												<li className="ms-0 ms-md-2 py-2" key={it} style={{ listStyleType: "none" }}>
													<div className="d-flex align-items-center">
														<div className="me-2">
															<FontAwesomeIcon className="fs-3 text-success" icon={solid("plus")} />
														</div>
														<div className="">{it}</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-md-6 mb-3 mb-md-0">
						<div className="p-3 h-100 white-border shadow bg-offLight">
							<div className="mb-2">
								<img className="img-fluid border border-5" src={chiroFriend} alt="Dr Austin Everill with a patient in the clinic."></img>
							</div>
							<div>
								<h3 className="h3 mb-0 josefinSans-text text-dark">Returning Patient</h3>
								<p className="fs-5 m-0">If we haven't seen you in two or more years.</p>
								<p className="fs-4 fw-bold">£46</p>
							</div>
							<div>
								<h3 className="h3 josefinSans-text text-dark">Existing Patient</h3>
								<p className="fs-4 fw-bold">£43</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="p-3 h-100 white-border shadow bg-offLight">
							<div className="mb-2">
								<img className="img-fluid border border-5" alt="Example of a medical treatment, a woman is having a injection administered to her face" src={other5x4}></img>
							</div>
							<h3 className="h4 josefinSans-text text-dark">Neuromodulator & Medical</h3>
							<ul className="list-group list-group-flush ">
								<li className="list-group-item bg-transparent">Chronic neck pain (upper cervical & trapezius) - £275</li>
								<li className="list-group-item bg-transparent">Precise Preempt Protocol for migraine - £390</li>
								<li className="list-group-item bg-transparent">Masseter/TMJ - £275</li>
								<li className="list-group-item bg-transparent">Jaw pain - £275</li>
								<li className="list-group-item bg-transparent">Tension headache - £275</li>
								<li className="list-group-item bg-transparent">Neuromodulator Facial - £190 (one area) + £40 per additional area</li>
							</ul>

							<h3 className="mt-3 h4 josefinSans-text text-dark">Vitamin Injections</h3>
							<ul className="list-group list-group-flush ">
								<li className="list-group-item bg-transparent">B12 Injection - £35</li>
								<li className="list-group-item bg-transparent">Glutathione - £50</li>
								<li className="list-group-item bg-transparent">Vitamin C - £40</li>
							</ul>
							
						</div>
					</div>
				</div>
			</ContentBox>
			<a target="_blank" href={state.bookingUrl} className="d-block btn btn-lg btn-dark p-3 rounded-0 rounded-bottom">
				Book now <FontAwesomeIcon className="fs-3 ms-3" icon={solid("up-right-from-square")} />
			</a>
		</PageContainer>
	);
}

export default Fees;

import PageHeader from "../components/PageHeader";
import therapy from "../images/new-imgs/therapy44.jpg";

function Contact() {
	return (
		<section className=" border-top border-1 border-secondary">
			<div className="container">
				<PageHeader text={"Fees"}></PageHeader>
				<div className="row d-flex justify-content-center">
					<div className="row mt-5">
						<div className="col">
							<div className="p-5 h-100" style={{ backgroundColor: "#F0EFEF" }}>
								<h3 className="ex-re-patient-header josefinSans-text text-dark">Existing Patient</h3>
								<p className="fs-3 fw-bold">£40</p>
								<p className="fs-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero consequat sapien egestas malesuada eget
									eu quam.
								</p>
							</div>
						</div>
						<div className="col">
							<div className="p-5 h-100" style={{ backgroundColor: "#F0EFEF" }}>
								<h3 className="ex-re-patient-header josefinSans-text text-dark">Returning Patient</h3>
								<p className="fs-3 fw-bold">£45</p>
								<p className="fs-4">If we haven’t seen you in two+ years, we will need a longer appointment time of 30 minutes.</p>
							</div>
						</div>
					</div>
					<div className="row my-5">
						<div className="col">
							<div className="p-5" style={{ backgroundColor: "#F0EFEF" }}>
								<div className="p-3 d-flex justify-content-center">
									<h3 className="new-patient-header josefinSans-text text-dark">New Patient</h3>
								</div>
								<div className="row">
									<div className="col py-2">
										<img className="w-100 " src={therapy}></img>
									</div>
									<div className="col" style={{ backgroundColor: "#F0EFEF" }}>
										<p className="fs-2 fw-bold">Exclusive £49 Introductory Offer Includes:</p>
										<ul className="fs-4 text-black list-group list-group-flush">
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Full consultation & Treatment with a Chiropractor
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Full examination of the spine
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Orthopedic & neurological assessments
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Gait & postural analysis
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Confidential Report of Findings
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Explanation of treatment procedure
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Free referral to appropriate specialist if required
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Advice on exercise & diet
											</li>
											<li className="ms-2 py-2" style={{ listStyleType: "none" }}>
												Complete rehabilitation program
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;

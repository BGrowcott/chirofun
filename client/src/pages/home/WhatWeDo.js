import austin2 from "../../images/newImg4.jpeg";
import banner from "../../images/banner.jpeg";
import gccReg from "../../images/gccReg.png";

function WhatWeDo() {
	return (
		<>
		<section className="container-md">
			<div className="row flex-row-reverse">
				<div className="col-12 col-lg-6 d-flex justify-content-center py-lg-5 p-3">
					<div className="rounded d-flex flex-column justify-content-center ">
						<h3 className="we-do-h3 fw-bold josefinSans-text text-dark mb-1 mb-md-3">About us</h3>
						<p className="fs-3 lh-lg fw-bold mb-3 mb-lg-3">
							Always evidence based.<br></br>
							Award winning.<br></br>
							Established clinic.<br></br>
							<abbr title="General Chiropractic Council">GCC</abbr> registered.<br></br>
							The best after care.<br></br>
							Fast results.<br></br>
						</p>
						<p className="fs-5">
							We are proud to have been rated one of the top three Chiropractic Clinics in Birmingham for the last 6 years. At Birmingham Chiropractic, we identify the
							underlying causes of our patients' pain to help them return to a full and active life. Experience personalised care with our
							chiropractor-led treatments, the best aftercare and rehabilitation advice.
						</p>
						<p className="fs-5">
							Choose from comprehensive spinal manipulation techniques, hands-on therapies, specialist manual therapy, and effective postural
							correction to help you feel your best. Our treatments are tailored to the needs of each patient, regardless of age. We are a
							family-friendly clinic and always put patients' needs first.
						</p>
						<div className="row align-items-center">
							<div className="col-6 col-xl-4 text-center">
								<img
									width="160"
									src="https://threebestrated.co.uk/awards/chiropractors-birmingham-2024-drk.svg"
									alt="Best Chiropractors in Birmingham -Three Best Rated award"
								/>
							</div>
							<div className="col-6 col-xl-4 text-center">
								<img
									width="160"
									src="https://threebestrated.co.uk/awards/chiropractors-birmingham-2025-drk.svg"
									alt="Best Chiropractors in Birmingham -Three Best Rated award"
								/>
							</div>
							<div className="col-12 col-xl-4 d-flex d-xl-block justify-content-center">
								<img style={{ width: "280px", display: "block" }} src={gccReg} alt="GCC Registered Certified logo"></img>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
					<figure className="m-0">
						<div className="white-border shadow">
							<img
								className="img-fluid austin-img"
								style={{ border: "1px solid #ffffff87" }}
								src={austin2}
								alt="Chiropractor Austin Everill standing and smiling. He is professional and confident."
							></img>
						</div>
						<figcaption>
							<p className="fs-4 fw-bold mt-1 text-center">
								<span className="d-none d-md-inline">Doctor</span>
								<span className="d-md-none">Dr.</span> Austin Everill - MChiro DC
							</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
		<div className="border-top border-10 border-secondary">
			<div className="w-100 banner d-flex align-items-center justify-content-center">
				<div className="banner-font fw-bold text-white text-shadow p-1 p-md-3 p-lg-5">
					Our treatment follow up survey showed 98% of patients would recommend us to family and friends
				</div>
			</div>
			{/* <img src={banner} className="w-100"/> */}
		</div>
		</>
	);
}

export default WhatWeDo;

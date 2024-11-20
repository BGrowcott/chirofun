import austin from "../../images/new-imgs/austin.jpg";
import gccReg from "../../images/new-imgs/gccReg.png";
import building from "../../images/new-imgs/building-sign.jpg";

function WhatWeDo() {
	return (
		<div className="container-md">
			<div className="row flex-row-reverse">
				<div className="col-12 col-lg-6 d-flex justify-content-center py-lg-5 p-3">
					<div className="rounded d-flex flex-column justify-content-center ">
						<h3 className="we-do-h3 fw-bold josefinSans-text text-dark mb-1 mb-md-3">About Us</h3>
						<p className="fs-3 lh-lg fw-bold mb-3 mb-lg-3">
							Always evidence based.<br></br>
							Fully <abbr title="General Chiropractic Council">GCC</abbr> Registered.<br></br>
							The best after care.<br></br>
							Fast results.<br></br>
						</p>
						<p className="fs-4">
							<span>Experience personalised care with our chiropractor-led treatments.</span> We offer comprehensive spinal manipulative
							techniques, hands-on therapies, specialised treatments, and effective postural correction to help you{" "}
							<span className="fw-bold">feel your best.</span>
						</p>
						<div className="row align-items-center">
							<div className="col-12 col-xl-4 text-center">
								<a target="_blank" href="https://threebestrated.co.uk/chiropractors-in-birmingham">
									<img
										width="180"
										src="https://threebestrated.co.uk/awards/chiropractors-birmingham-2024-drk.svg"
										alt="Best Chiropractors in Birmingham"
									/>
								</a>
							</div>
							<div className="col-12 col-xl-4 d-flex d-xl-block justify-content-center">
								<img style={{ width: "300px", display: "block" }} src={gccReg} alt="GCC Registered Certified logo"></img>
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
								src={austin}
								alt="Chiropractor Austin Everill standing and smiling. He is professional and confident."
							></img>
						</div>
						<figcaption>
							<p className="fs-4 fw-bold mt-1 text-center">Doctor Austin Everill - MChiro DC</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
}

export default WhatWeDo;

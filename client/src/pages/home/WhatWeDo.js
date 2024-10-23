import austin from "../../images/new-imgs/austin.jpg";
import gccReg from "../../images/new-imgs/gccReg.png";
import vid from "../../images/new-imgs/welVid.mp4";

function WhatWeDo() {
	return (
		<div className="container-md mb-5">
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
							Experience personalised care with our chiropractor-led treatments. We offer comprehensive spinal manipulative techniques, hands-on
							therapies, specialised treatments, and effective postural correction to help you <span className="fw-bold">feel your best.</span>
						</p>
						<div className="row align-items-center">
							<div className="col-12 col-lg-4 text-center">
								<a target="_blank" href="https://threebestrated.co.uk/chiropractors-in-birmingham">
									<img
										width="180"
										src="https://threebestrated.co.uk/awards/chiropractors-birmingham-2024-drk.svg"
										alt="Best Chiropractors in Birmingham"
									/>
								</a>
							</div>
							<div className="col-12 col-lg-4 d-flex d-lg-block justify-content-center">
								<img style={{ width: "300px", display: "block" }} src={gccReg} alt="GCC Registered Certified logo"></img>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
					<img
						className="img-fluid austin-img"
						style={{ border: "1px solid #ffffff87" }}
						src={austin}
						alt="Chiropractor Austin Everill standing and smiling"
					></img>
					<p className="fs-4 fw-bold mt-1">Dr Austin Everill - MChiro DC</p>
				</div>
			</div>
			{/* <hr></hr> */}
			<div className="d-flex justify-content-center">
				<video controls className="mw-100 shadow white-border">
					<source src={vid} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export default WhatWeDo;

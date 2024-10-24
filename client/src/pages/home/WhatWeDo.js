import building from "../../images/new-imgs/building-sign.jpg";
import therapy6 from "../../images/new-imgs/therapy6.jpg";
import austin from "../../images/new-imgs/austin.jpg";
import gccReg from "../../images/new-imgs/gccReg.jpeg";
import WhatWeDoNav from "./WhatWeDoNav";

function WhatWeDo() {
	return (
		<div className="container-md">
			<div className="row flex-row-reverse my-5 pt-5 pb-5">
				<div className="col-12 col-md-6 d-flex justify-content-center py-lg-5 p-3">
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
							<div className="col-4 text-center">
								<a									
									target="_blank"
									href="https://threebestrated.co.uk/chiropractors-in-birmingham"
									style={{ display: "inline-block; border:0;" }}
								>
									<img										
										width="160"
										src="https://threebestrated.co.uk/awards/chiropractors-birmingham-2024-drk.svg"
										alt="Best Chiropractors in Birmingham"
									/>
								</a>
							</div>
							<div className="col-4">
								<img style={{ width: "200px", display: "block" }} src={gccReg}></img>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
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
		</div>
	);
}

export default WhatWeDo;

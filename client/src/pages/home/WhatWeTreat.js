import TherapyCarousel from "./TherapyCarousel";

function WhatWeTreat() {
	const whatWeTreat = ["Lower Back Pain", "Siatica", "New Pain", "Headaches", "Shoulder Pain", "Hip/Knee Arthritis", "Tennis Elbow"];

	return (
		<>
			<div className="bg-dark carousel-section">
				<div className="container-md py-lg-5">
					<div className="row">
						<div className="col-12 col-lg-5">
							<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-start p-2 p-lg-5">
								<h3 className=" we-do-h3 fw-bold py-3 josefinSans-text" style={{ color: "#f4efef" }}>
									What we treat
								</h3>
								<ul className="fs-3 we-treat-list text-uppercase text-black list-group list-group-flush bg-dark" style={{ color: "#f4efef" }}>
									{whatWeTreat.map((it, index) => (
										<li key={it} className="list-group-item bg-dark text-light">
											{it}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-12 col-lg-7 ">
							<TherapyCarousel></TherapyCarousel>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhatWeTreat;

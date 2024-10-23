import React from "react";
import austin from "../../images/new-imgs/austin.jpg";

function TeamCard({ teamMember }) {

	const { title, summary, image, textHtml } = teamMember;

	return (
		<div className="shadow white-border">
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-7 p-4 d-flex flex-column justify-content-center" style={{ backgroundColor: "#F0EFEF" }}>
						<h2 className="main-font text-dark fw-bold josefinSans-text mb-1">{title}</h2>
						<p className="fs-4 fw-bold mb-3">{summary}</p>
						<div className="fs-5 pe-5">
							{textHtml}
						</div>
					</div>

					<div className="col-12 col-lg-5 p-0">
						<div>
							<img className="img-fluid max-width" src={image}></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;

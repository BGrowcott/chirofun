import React from "react";
import austin from "../../images/new-imgs/austin.jpg";

function TeamCard({ teamMember }) {

	const { title, summary, image, textHtml } = teamMember;

	return (
		<div className="shadow white-border" style={{ backgroundColor: "#F0EFEF" }}>
			<div className="container">
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-7 p-1 p-md-4 d-flex flex-column justify-content-center">
						<h2 className="main-font text-dark fw-bold josefinSans-text mb-1">{title}</h2>
						<p className="fs-4 fw-bold mb-3">{summary}</p>
						<div className="" style={{fontSize: "1.2em"}}>
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

import austin from "../../images/new-imgs/austinFull.jpg";
import claire from "../../images/new-imgs/Claire.jpg";
import adrian from "../../images/new-imgs/Adrian.jpg";
import TeamCard from "./TeamCard";

import "./meetTheTeam.css";

function MeetTheTeam() {
	return (
		<section className="border-top border-1 border-secondary">
			<div className="container">
				<div className="mt-5 josefinSans-text">
					<div className="border-bottom border-1 border-secondary w-100">
						<h1 className="about-header mt-5 fw-bold text-dark">Our Team</h1>
					</div>
				</div>
				<div id="test2" className="my-5 py-5">
					<TeamCard teamImg={austin}></TeamCard>
				</div>
				<div className="my-5 py-5">
					<TeamCard teamImg={claire}></TeamCard>
				</div>
				<div id="test" className="my-5 py-5">
					<TeamCard teamImg={adrian}></TeamCard>
				</div>
			</div>
		</section>
	);
}

export default MeetTheTeam;

{
	/* <div className="row">
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
          <div
            className="doc-img col m-4"
            src={doc}
            style={{ backgroundImage: `url(${doc})` }}
            alt="Doctor"
          ></div>
        </div> */
}
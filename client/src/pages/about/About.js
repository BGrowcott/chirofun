import austin from "../../images/new-imgs/austinFull.jpg";
import claire from "../../images/new-imgs/Claire.jpg";
import adrian from "../../images/new-imgs/Adrian.jpg";
import TeamCard from "./TeamCard";

import "./about.css";

function About() {
	return (
		<section className="border-top border-1 border-secondary">
			<div className="container">
				<div className="mt-5 josefinSans-text">
					<div className="border-bottom border-1 border-secondary w-100">
						<h1 className="about-header mt-5 fw-bold text-dark">Meet Our Team</h1>
					</div>
				</div>
				<div className="my-5 py-5">
					<TeamCard teamImg={austin}></TeamCard>
				</div>
				<div className="my-5 py-5">
					<TeamCard teamImg={claire}></TeamCard>
				</div>
				<div className="my-5 py-5">
					<TeamCard teamImg={adrian}></TeamCard>
				</div>
			</div>
		</section>
	);
}

export default About;

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

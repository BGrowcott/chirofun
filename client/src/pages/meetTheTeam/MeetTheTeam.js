import austin from "../../images/new-imgs/austinFull.jpg";
import claire from "../../images/new-imgs/Claire.jpg";
import adrian from "../../images/new-imgs/Adrian.jpg";
import TeamCard from "./TeamCard";

import "./meetTheTeam.css";
import PageHeader from "../../components/PageHeader";

function MeetTheTeam() {
	return (
		<section className="border-top border-1 border-secondary">
			<div className="container">
				<PageHeader text={"Our Team"}></PageHeader>
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

import austin from "../../images/new-imgs/austinFull.jpg";
import claire from "../../images/new-imgs/Claire.jpg";
import adrian from "../../images/new-imgs/Adrian.jpg";
import TeamCard from "./TeamCard";

import "./meetTheTeam.css";
import PageHeader from "../../components/PageHeader";

function MeetTheTeam() {
	const teamMembers = [
		{
			title: "Dr Austin Everill - MChiro DC",
			summary: "Align Your Spine, Elevate Your Health.",
			image: austin,
			textHtml: (
				<>
					<p>
						Austin has years of experience working with a wide range of patients. He believes that given the right advice and help most people can
						live a healthy life without back pain. <strong>It doesn't matter what your age or background.</strong>
					</p>
					<p>
						<em>
							"Back pain is not a normal part of ageing, although too many people think it is. Regardless of age you can benefit from treatment."
						</em>
					</p>
					<p>
						Austin completed his 5 year professional Chiropractic degree in Oxford - fully qualified Doctor of Chiropractic and registered with the
						General Chiropractic Council. Austin is a keen runner but after a recurring back problem he had to stop his favourite sport. Two years
						of back pain continued with no resolution - a visit to the Chiropractor finally helped get him running again. He is passionate about
						getting his patients back to a pain free life and <strong>returning to the activities they love.</strong>
					</p>
				</>
			),
		},

		{
			title: "Claire Corfield - Yogi Extraordinaire",
			summary: "Heal, Strengthen, Transform.",
			image: claire,
			textHtml: (
				<>
					<p>
						Claire completed her 200 hour yoga teacher training in September 2016. Since then she has taught in many studios across Birmingham
						including Yogahaven, Barefoot and HotPod Solihull.
					</p>
					<p>
						Claire originally came yoga due to neck and back pain. She noticed quickly how much yoga helped. Claire received regular chiropractic
						treatment and combined with yoga practice, has been pain free since.
					</p>
					<p>
						Along with Chiropractic, Yoga is recommended by the National Institute of Clinical Excellence as part of a first basis approach to Back
						Pain care.
					</p>
					<p>
						Claire knows how daunting it can feel to start yoga, but her friendly, fun approach to teaching puts even the most anxious student at
						ease. Claire specialises in and is passionate about core strength (something she herself has had to work hard on) and Yoga Nidra, a
						deeply relaxing technique suitable for <strong>all levels.</strong>
					</p>
				</>
			),
		},
		{
			title: "Pete Mander - Sports Massage Therapist",
			summary: "Relieve. Recover. Perform Better.",
			image: adrian,
			textHtml: (
				<>
					<p>
						Pete graduated from University College Birmingham with a BSc Hons Degree in Sports Therapy in 2012. He has over 10 years of experience
						working as a sports massage therapist and is a member of the Federation of Holistic Therapists.
					</p>
					<p>
						Sports massage is <em>not</em> just for the active sportsperson. Whether you are a stay-at-home parent, have an office-based job, or are
						a manual worker, Pete will use his knowledge and understanding to provide effective and beneficial treatment for all individuals. Using
						various massage techniques, Pete will aim to correct problems and imbalances in soft tissue structures caused by trauma, repetitive
						movements or physical activity. In doing so, Pete aims to bring his clients back to the optimal levels of functional, occupational and
						sports-specific fitness - <strong>regardless of age and ability.</strong>
					</p>
					Benefits of Sports Massage: Reduced muscle tension, improved circulation, injury prevention, improved recovery, pain management, enhanced
					performance, stress relief.
				</>
			),
		},
	];

	return (
		<section className="border-top border-1 border-secondary">
			<div className="container">
				<PageHeader text={"Our Team"}></PageHeader>
				<div>
					{teamMembers.map((teamMember) => (
						<div className="my-5 py-5" key={teamMember.name}>
							<TeamCard teamMember={teamMember}></TeamCard>
						</div>
					))}
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

import React, { useState } from "react";
import chiropractic from "../../images/new-imgs/Chiro-removebg-preview.png";
import orthotic from "../../images/new-imgs/orthotics-removebg-preview1.png";
import sportsRem from "../../images/new-imgs/SportsMassage-removebg-preview.png";
import TherapyInfo from "./TherapyInfo";
import PageHeader from "../../components/PageHeader";

function WhatWeDo() {
	const therapyTypes = [
		{
			title: "Chiropractic",
			text: `Chiropractors are best known for manual treatments such as spinal manipulation, where they use their hands to free stiff or restricted joints, 
              or mobilisation, which is the gradual moving of joints. But they may also use other recommended treatments such as certain types of acupuncture,
              electrotherapy, stretching exercises and rehabilitation, all of which form part of a chiropractor’s package of care. Your chiropractor may also offer lifestyle advice 
              to help recovery and to prevent repeated episodes of back pain.`,
			therapyTypeCode: "chiropractic",
			image: chiropractic,
		},
		{
			title: "Orthotic",
			text: `Orthotics are shoe inserts for biomechanical problems of Gait or walking. We offer a range of orthotics for those who would benefit from their use. 
              From simple heel lifts and off-the-shelf inserts to custom-made polypropylene NHS grade orthotics manufactured from individual prescription.`,
			therapyTypeCode: "orthotic",
			image: orthotic,
		},
		{
			title: "Sports Remedial",
			text: `Adrian graduated from the Active School of Complementary Therapy (ASCT) in 2013 gaining a BTEC Level 5 Diploma in clinical sports and remedial massage.
              This is currently the highest qualification that can be held in the UK, recognised nationally and in many other countries. 
              Adrian utilises a range of massage and advanced soft tissue techniques set within a framework of assessment and rehabilitation procedures to effectively treat a variety of musculoskeletal problems. 
              These skills can also be used to help in recovery and reduce the symptoms in many medical conditions too.`,
			therapyTypeCode: "sportsRemedial",
			image: sportsRem,
		},
	];

	const [selectedTherapy, setSelectedTherapy] = useState(therapyTypes[0]);

	const handleTherapySelect = (therapyType) => {
		setSelectedTherapy(therapyType);
	};

	return (
		<section className="border-top border-1 border-secondary">
			<div className="container">
				<PageHeader text={"What We Do"}></PageHeader>
				<div className="py-5">
					<div className="row">
						{therapyTypes.map((it) => (
							<div className="col" key={it.therapyTypeCode}>
								<TherapyInfo therapyType={it} selectedTherapy={selectedTherapy} handleTherapySelect={handleTherapySelect} />
							</div>
						))}
					</div>
					<div className="row m-0 fs-3 p-5" style={{ backgroundColor: "#F0EFEF" }}>
						<h3 className="m-0 py-3 fs-1 josefinSans-text">{selectedTherapy.title}</h3>
						<p>{selectedTherapy.text}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhatWeDo;

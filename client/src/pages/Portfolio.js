import React, { useState } from "react";
import chiropractic from "../images/new-imgs/Chiro-removebg-preview.png";
import orthotic from "../images/new-imgs/orthotics-removebg-preview1.png";
import sportsRem from "../images/new-imgs/SportsMassage-removebg-preview.png";
import TherapyInfo from "../components/TherapyInfo";

function Portfolio() {
  const [selectedTherapy, setSelectedTherapy] = useState("chiropractic");

  const handleTherapySelect = (therapyType) => {
    setSelectedTherapy(therapyType);
  };

  const therapyText = [
    {
      title: "Chiropractic",
      text: "Chiropractors are best known for manual treatments such as spinal manipulation, where they use their hands to free stiff or restricted joints, or mobilisation, which is the gradual moving of joints. But they may also use other recommended treatments such as certain types of acupuncture, electrotherapy, stretching exercises and rehabilitation, all of which form part of a chiropractor’s package of care. Your chiropractor may also offer lifestyle advice to help recovery and to prevent repeated episodes of back pain.",
    },
    {
      title: "Orthotic",
      text: "Orthotics are shoe inserts for biomechanical problems of Gait or walking. We offer a range of orthotics for those who would benefit from their use. From simple heel lifts and off-the-shelf inserts to custom-made polypropylene NHS grade orthotics manufactured from individual prescription.",
    },
    {
      title: "Sports Remedial",
      text: "Adrian graduated from the Active School of Complementary Therapy (ASCT) in 2013 gaining a BTEC Level 5 Diploma in clinical sports and remedial massage. This is currently the highest qualification that can be held in the UK, recognised nationally and in many other countries. Adrian utilises a range of massage and advanced soft tissue techniques set within a framework of assessment and rehabilitation procedures to effectively treat a variety of musculoskeletal problems. These skills can also be used to help in recovery and reduce the symptoms in many medical conditions too.",
    },
  ];

  return (
    <section className="border-top border-1 border-secondary">
      <div className="container my-5">
        <div className="d-flex justify-content-center m-5">
          <h2 className="what-we-do-header row fw-bold text-dark josefinSans-text my-5">
            What we do
          </h2>
        </div>
        <div className="row">
          <TherapyInfo
            therapyImage={chiropractic}
            therapyType="chiropractic"
            selectedTherapy={selectedTherapy}
            onSelectTherapy={handleTherapySelect}
            therapyText={therapyText[0]}
          />

          <TherapyInfo
            therapyImage={orthotic}
            therapyType="orthotic"
            selectedTherapy={selectedTherapy}
            onSelectTherapy={handleTherapySelect}
            therapyText={therapyText[1]}
          />

          <TherapyInfo
            therapyImage={sportsRem}
            therapyType="sportsRemedial"
            selectedTherapy={selectedTherapy}
            onSelectTherapy={handleTherapySelect}
            therapyText={therapyText[2]}
          />
          
        </div>
        <div
          className="row m-0 fs-3 p-5"
          style={{ backgroundColor: "#F0EFEF" }}
        >
          <h3 className="m-0 py-3 fs-1 josefinSans-text">
            {selectedTherapy === "chiropractic" && therapyText[0].title}
            {selectedTherapy === "orthotic" && therapyText[1].title}
            {selectedTherapy === "sportsRemedial" && therapyText[2].title}
          </h3>
          <p>
            {selectedTherapy === "chiropractic" && therapyText[0].text}
            {selectedTherapy === "orthotic" && therapyText[1].text}
            {selectedTherapy === "sportsRemedial" && therapyText[2].text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

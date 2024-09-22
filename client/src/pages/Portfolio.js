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
      text: "Chiractic......................",
    },
    { title: "Orthotic", text: "Orthotic......................." },
    { title: "Sports Remedial", text: "Sports remedial...................." },
  ];

  return (
    <section>
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
          />

          <TherapyInfo
            therapyImage={orthotic}
            therapyType="orthotic"
            selectedTherapy={selectedTherapy}
            onSelectTherapy={handleTherapySelect}
          />

          <TherapyInfo
            therapyImage={sportsRem}
            therapyType="sportsRemedial"
            selectedTherapy={selectedTherapy}
            onSelectTherapy={handleTherapySelect}
          />

          {/* <div className="col">
            <div>
              <img className="w-100" src={orthotic} alt="Orthotics" />
            </div>
            <h3 className="text-center m-0 py-3">Chiropractic</h3>
          </div> */}
          {/* <div className="col">
            <div>
              <img className="w-100" src={sportsRem} alt="Sports Massage" />
            </div>
            <h3 className="text-center m-0 py-3">Chiropractic</h3>
          </div> */}
        </div>
        <div
          className="row m-0 fs-3 p-5"
          style={{ backgroundColor: "#F0EFEF" }}
        >
          <h3 className="m-0 py-3">
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

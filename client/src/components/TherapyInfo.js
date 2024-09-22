import React from "react";

function TherapyInfo({
  therapyImage,
  therapyType,
  selectedTherapy,
  onSelectTherapy,
}) {
  const isSelected = selectedTherapy === therapyType;

  const buttonStyle = {
    cursor: "pointer",
    padding: "10px",
    backgroundColor: isSelected ? "#F0EFEF" : "#f9f7f7",
    color: isSelected ? "#F0EFEF" : "#19647e",
  };

  return (
    <div className="col" onClick={() => onSelectTherapy(therapyType)}>
      <div style={buttonStyle}>
        <img className="w-100" src={therapyImage} alt="Chiropractic" />
      </div>
      <h3 className="text-center m-0 py-3" style={buttonStyle}>
        Chiropractic
      </h3>
    </div>
  );
}

export default TherapyInfo;

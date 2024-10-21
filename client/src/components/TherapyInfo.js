import React from "react";

function TherapyInfo({
  therapyImage,
  therapyType,
  selectedTherapy,
  onSelectTherapy,
  therapyText,
}) {
  const isSelected = selectedTherapy === therapyType;

  const cardStyle = {
    padding: "10px",
    backgroundColor: isSelected ? "#F0EFEF" : "#f9f7f7",
    // color: isSelected ? "#F0EFEF" : "#19647e",
  };

  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: isSelected ? "#19647e" : "#f9f7f7",
  };

  const buttonContainerStyle = {
    backgroundColor: isSelected ? "#F0EFEF" : "#f9f7f7",
    color: isSelected ? "#f9f7f7" : "#19647e",
  };

  // const containerStyle = {
  //   borderTop: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderLeft: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderRight: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderBottom: isSelected ? "1px solid #19647e" : "1px solid #dce9f8af",
  // };

  return (
    <div className="col">
      <div className="h-85" style={cardStyle}>
        <img className="w-100" src={therapyImage} alt="Chiropractic" />
      </div>
      <div className="text-center m-0 py-3" style={buttonContainerStyle}>
        <button
          className="therapy-info-button p-3 text-dark fw-bold w-75 font-s"
          style={buttonStyle}
          onClick={() => onSelectTherapy(therapyType)}
        >
          {therapyText.title}
        </button>
      </div>
    </div>
  );
}

export default TherapyInfo;

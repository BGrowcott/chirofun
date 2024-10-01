import React from "react";

function TherapyInfo({
  therapyImage,
  therapyType,
  selectedTherapy,
  onSelectTherapy,
  therapyText,
}) {
  const isSelected = selectedTherapy === therapyType;

  const buttonStyle = {
    padding: "10px",
    backgroundColor: isSelected ? "#F0EFEF" : "#f9f7f7",
    color: isSelected ? "#F0EFEF" : "#19647e",
  };

  // const containerStyle = {
  //   borderTop: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderLeft: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderRight: isSelected ? "1px solid #dce9f8af" : "1px solid #f9f7f7",
  //   borderBottom: isSelected ? "1px solid #19647e" : "1px solid #dce9f8af",
  // };

  return (
    <div className="col">
      <div style={buttonStyle}>
        <img className="w-100" src={therapyImage} alt="Chiropractic" />
      </div>
      <div className="text-center m-0 py-3" style={buttonStyle}>
        <button
          className="p-3 bg-dark text-light fw-bold fs-5 w-50"
          style={{ cursor: "pointer" }}
          onClick={() => onSelectTherapy(therapyType)}
        >
          {therapyText.title}
        </button>
      </div>
    </div>
  );
}

export default TherapyInfo;

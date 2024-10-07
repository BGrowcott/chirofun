import React from "react";

function TherapyInfo({
  therapyType,
  selectedTherapy,
  handleTherapySelect,
}) {
  const isSelected = selectedTherapy.therapyTypeCode === therapyType.therapyTypeCode;

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
    <div>
      <div style={buttonStyle}>
        <img className="w-100" src={therapyType.image} alt="Chiropractic" />
      </div>
      <div className="text-center m-0 py-3" style={buttonStyle}>
        <button
          className="p-3 bg-dark text-light fw-bold fs-5 w-50"
          style={{ cursor: "pointer" }}
          onClick={() => handleTherapySelect(therapyType)}
        >
          {therapyType.title}
        </button>
      </div>
    </div>
  );
}

export default TherapyInfo;

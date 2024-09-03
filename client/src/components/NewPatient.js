function NewPatient() {
  return (
    <div className="py-5">
      <div
        className="container d-flex flex-column align-items-center justify-content-center p-5"
        style={{ backgroundColor: "#EDEADE" }}
      >
        <h3 className="fs-1 fw-bold josefinSans-text mb-4">
          New Patient Special
        </h3>
        {/* Center content both horizontally and vertically */}
        <div className="d-flex align-items-center justify-content-center fs-3">
          <p className="text-light bg-dark m-0 p-3">Start Now</p>
        </div>
      </div>
    </div>
  );
}

export default NewPatient;

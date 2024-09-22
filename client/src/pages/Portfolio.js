import React from "react";
import chiropractic from "../images/new-imgs/Chiro-removebg-preview.png";
import orthotic from "../images/new-imgs/orthotics-removebg-preview.png";
import sportsRem from "../images/new-imgs/SportsMassage-removebg-preview.png";

function Portfolio() {
  return (
    <section>
      <div className="container my-5">
        <div className="d-flex justify-content-center m-5">
          <h2 className="what-we-do-header row fw-bold text-dark josefinSans-text my-5">
            What we do
          </h2>
        </div>
        <div className="row">
          <div className="col">
            <div style={{ backgroundColor: "#F0EFEF" }}>
              <img className="w-100" src={chiropractic} alt="Chiropractic" />
            </div>
            <h3
              className="text-center m-0 py-3"
              style={{
                backgroundColor: "#F0EFEF",
                color: "#F0EFEF",
              }}
            >
              Chiropractic
            </h3>
          </div>
          <div className="col">
            <div>
              <img className="w-100" src={orthotic} alt="Orthotics" />
            </div>
            <h3 className="text-center m-0 py-3">Chiropractic</h3>
          </div>
          <div className="col">
            <div>
              <img className="w-100" src={sportsRem} alt="Sports Massage" />
            </div>
            <h3 className="text-center m-0 py-3">Chiropractic</h3>
          </div>
        </div>
        <div
          className="row m-0 fs-3 p-5"
          style={{ backgroundColor: "#F0EFEF" }}
        >
          <h3 className="m-0 py-3">Chiropractic</h3>
          <p>
            Chiropractors are best known for manual treatments such as spinal
            manipulation, where they use their hands to free stiff or restricted
            joints, or mobilisation, which is the gradual moving of joints. But
            they may also use other recommended treatments such as certain types
            of acupuncture, electrotherapy, stretching exercises and
            rehabilitation, all of which form part of a chiropractor’s package
            of care. Your chiropractor may also offer lifestyle advice to help
            recovery and to prevent repeated episodes of back pain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

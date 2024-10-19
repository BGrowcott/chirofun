import React from "react";
import MapAndOpeningTimes from "./home/MapAndOpeningTimes";
import { MdOutlinePhone } from "react-icons/md";

function ContactUs() {
  return (
    <section className=" border-top border-1 border-secondary">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="mb-5 josefinSans-text">
            <div className="border-bottom border-1 border-secondary w-100">
              <h1 className="about-header mt-5 fw-bold text-dark">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={{ backgroundColor: "#F0EFEF" }}>
          <div className="col d-flex flex-column justify-content-center align-items-center text-dark">
            <h3>EMAIL</h3>
            <p className="fs-4">INFO@BIRMINGHAMCHIROPRACTIC.UK.COM</p>
            <a
              href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
              target="_blank"
              className="btn btn-outline-dark w-25 p-2 fs-4"
            >
              Book Now
            </a>
          </div>
          <div className="col ">
            <div className="container">
              <div className="row">
                <div
                  className="col-6 p-5 h-100 bg-dark"
                  style={{ color: "#F0EFEF" }}
                >
                  <div>
                    <div className="d-flex justify-content-center m-4">
                      <MdOutlinePhone className="fs-1" />
                    </div>
                    <p className="fs-4 text-center">CALL US: 07898 903772</p>
                  </div>
                </div>
                <div className="p-4 col-6">
                  <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center mt-2 text-dark">
                    <h3 className="fs-4 text-center josefinSans-text">
                      ADDRESS
                    </h3>
                    <p className="fs-4 text-center">
                      Chiropractic, 264 Alcester Rd South, King's Heath,
                      Birmingham B14 6DR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapAndOpeningTimes></MapAndOpeningTimes>
    </section>
  );
}

export default ContactUs;

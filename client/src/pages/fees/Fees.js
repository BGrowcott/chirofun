import PageHeader from "../../components/utils/PageHeader";
import therapy2 from "../../images/therapy2.jpg";
import therapy3 from "../../images/IMG_2727.jpeg";
import building from "../../images/building-sign.jpg";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import PageContainer from "../../components/utils/PageContainer";
import ContentBox from "../../components/utils/ContentBox";

function Fees() {
  useEffect(() => {
    document.title = "Fees - Birmingham Chiropractic";
  }, []);

  const firstExamList = [
    "Full consultation & Treatment with a Chiropractor",
    "Full examination of the spine",
    "Orthopedic & neurological assessments",
    "Gait & postural analysis",
    "Confidential Report of Findings",
    "Explanation of treatment procedure",
    "Free referral to appropriate specialist if required",
    "Advice on exercise & diet",
    "Complete rehabilitation program",
  ];

  return (
    <PageContainer>
      <PageHeader text={"Fees"}></PageHeader>
      <ContentBox>
        <div className="row">
          <div className="col-12 mb-3">
            <div className="p-1 p-md-3 white-border shadow bg-offLight">
              <div className="d-flex justify-content-center">
                <h3 className="h1 josefinSans-text text-dark">New Patient</h3>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="d-none d-lg-block">
                      <img
                        className="w-100 border border-5"
                        src={building}
                        alt="Birmingham Chiropratic sign outside of the clinic. The sign is blue with white writing and lists the businesses name and contact information."
                      ></img>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 bg-offLight">
                    <p className="fs-2 fw-bold">
                      £55 Consultation & Treatment Includes:
                    </p>
                    <ul className="fs-5 text-black list-group list-group-flush">
                      {firstExamList.map((it) => (
                        <li
                          className="ms-0 ms-md-2 py-2"
                          key={it}
                          style={{ listStyleType: "none" }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <FontAwesomeIcon
                                className="fs-3 text-success"
                                icon={solid("plus")}
                              />
                            </div>
                            <div className="">{it}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="p-3 h-100 white-border shadow bg-offLight">
              <div className="mb-2">
                <img
                  className="img-fluid border border-5"
                  src={therapy2}
                  alt="Dr Austin Everill with a patient in the clinic."
                ></img>
              </div>
              <h3 className="h1 josefinSans-text text-dark">
                Existing Patient
              </h3>
              <p className="fs-3 fw-bold">£40</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 h-100 white-border shadow bg-offLight">
              <div className="mb-2">
                <img
                  className="img-fluid border border-5"
                  alt="Dr Austin Everill with a patient in the clinic."
                  src={therapy3}
                ></img>
              </div>
              <h3 className="h1  josefinSans-text text-dark">
                Returning Patient
              </h3>
              <p className="fs-3 fw-bold">£45</p>
              <p className="fs-4">
                If we haven't seen you in two or more years.
              </p>
            </div>
          </div>
        </div>
      </ContentBox>
      <a
        target="_blank"
        href="https://www.fresha.com/book-now/birmingham-chiropractic-hhdevkrf/all-offer?share&pId=34323"
        className="d-block btn btn-lg btn-dark p-3 rounded-0 rounded-bottom"
      >
        Book now{" "}
        <FontAwesomeIcon
          className="fs-3 ms-3"
          icon={solid("up-right-from-square")}
        />
      </a>
    </PageContainer>
  );
}

export default Fees;

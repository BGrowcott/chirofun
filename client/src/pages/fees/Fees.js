import PageHeader from "../../components/PageHeader";
import therapy from "../../images/new-imgs/therapy44.jpg";
import therapy2 from "../../images/new-imgs/therapy2.jpg";
import therapy3 from "../../images/new-imgs/IMG_2727.jpeg";
import building from "../../images/new-imgs/building-sign.jpg";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Fees() {
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
        <section className=" border-top border-1 border-secondary">
            <div className="container-xxl">
                <div className="p-md-3">
                    <PageHeader text={"Fees"}></PageHeader>

                    <div className="p-sm-3 p-1 pt-3 mt-1 bg-warm">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="p-1 p-md-3 white-border shadow" style={{ backgroundColor: "#F0EFEF" }}>
                                    <div className="d-flex justify-content-center">
                                        <h3 className="h1 josefinSans-text text-dark">New Patient</h3>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12 col-lg-5">
                                                <div className="d-none d-lg-block">
                                                    <img className="w-100" src={building}></img>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7" style={{ backgroundColor: "#F0EFEF" }}>
                                                <p className="fs-2 fw-bold">Exclusive £49 Introductory Offer Includes:</p>
                                                <ul className="fs-5 text-black list-group list-group-flush">
                                                    {firstExamList.map((it) => (
                                                        <li className="ms-2 py-2" key={it} style={{ listStyleType: "none" }}>
                                                            <FontAwesomeIcon className="fs-3 text-success" icon={solid("plus")} /> {it}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="px-2">
                                                    <a
                                                        target="_blank"
                                                        href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
                                                        className="d-block btn btn-lg btn-dark p-3"
                                                    >
                                                        Book now <FontAwesomeIcon className="fs-3 ms-3" icon={solid("up-right-from-square")} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                <div className="p-3 h-100 white-border shadow" style={{ backgroundColor: "#F0EFEF" }}>
                                    <div className="mb-2">
                                        <img className="img-fluid" src={therapy2}></img>
                                    </div>
                                    <h3 className="h1 josefinSans-text text-dark">Existing Patient</h3>
                                    <p className="fs-3 fw-bold">£40</p>
                                    <p className="fs-4">15 minutes chiropractic appointment </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-3 h-100 white-border shadow" style={{ backgroundColor: "#F0EFEF" }}>
                                    <div className="mb-2">
                                        <img className="img-fluid" src={therapy3}></img>
                                    </div>
                                    <h3 className="h1  josefinSans-text text-dark">Returning Patient</h3>
                                    <p className="fs-3 fw-bold">£45</p>
                                    <p className="fs-4">If we haven't seen you in two+ years, we will need a longer appointment time of 30 minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        target="_blank"
                        href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
                        className="d-block btn btn-lg btn-dark p-3 rounded-0 rounded-bottom"
                    >
                        Book now <FontAwesomeIcon className="fs-3 ms-3" icon={solid("up-right-from-square")} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Fees;

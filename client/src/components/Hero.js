import hero from "../images/flexible-back.jpg";
import hero1 from "../images/hero1.jpg";
import hero2 from "../images/hero2.5.jpg";
import hero3 from "../images/hero3.jpg";
import cert1 from "../images/ClinicFiveStarTreatment.png";
import cert2 from "../images/BestRatedBirm.jpg";
import cert3 from "../images/GCC-Registered_black.png";

function Hero() {
    return (
        <div className="hero position-relative">
            <div
                className="hero-img"
                src={hero}
                style={{ backgroundImage: `url(${hero2})` }}
            ></div>
            <div
                className="position-absolute top-0 w-50"
                style={{
                    height: "55vh",
                    backgroundImage:
                        "linear-gradient(to right, white, transparent)",
                }}
            >
                <div className="p-5" style={{ width: "60%" }}>
                    <div>
                        <h2 className="h1 josefinSans-text text-dark">
                            <span className="text-black">Welcome to</span>{" "}
                            <br></br>
                            <span className="fw-bold">
                                Birmingham Chiropractic
                            </span>
                        </h2>
                        <p className="fs-3 d-none d-lg-block">
                            Outstanding back and neck care.
                        </p>
                        <p className="fs-5">
                            We strive to get you pain-free using safe,
                            evidence-based, and individually tailored treatment
                            programs.  We want you back to doing what you love.
                        </p>
                        <a target="_blank" href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true" className="btn btn-lg btn-dark p-3">
                            Make an Appointment Today!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

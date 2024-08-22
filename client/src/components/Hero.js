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
                    height: "45vh",
                    backgroundImage: "linear-gradient(to right, red , yellow)",
                }}
            >
                <div className="p-5" style={{width: "60%"}}>
                    <div>
                        <h2 className="h1 josefinSans-text text-dark">
                            <span className="text-black">Welcome to</span> <br></br>
                            <span className="fw-bold">Birmingham Chiropractic</span>
                        </h2>
                        <p className="fs-5 d-none d-lg-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed lacinia, sapien a consectetur sodales,
                            metus lorem faucibus est, sit amet facilisis dolor
                            tortor a nisi. Integer pulvinar odio a nisi
                            facilisis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

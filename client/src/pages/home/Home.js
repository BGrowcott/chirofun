import cert1 from "../../images/ClinicFiveStarTreatment.png";
import cert2 from "../../images/BestRatedBirm.jpg";
import cert3 from "../../images/GCC-Registered_black.png";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhatWeDoNav from "./WhatWeDoNav";
import TherapyCarousel from "./TherapyCarousel";
import WhatWeTreat from "./WhatWeTreat";
import MapAndOpeningTimes from "./MapAndOpeningTimes";
import WelcomeVideo from "./WelcomeVideo";
import Testimonials from "./Testimonials";
// import NewPatient from "../components/NewPatient";

const Home = () => {


  return (
    <section>
      <Hero></Hero>
      <div className="home-container">
        <WhatWeDo></WhatWeDo>

        <WelcomeVideo></WelcomeVideo>

        <WhatWeTreat></WhatWeTreat>

        <WhatWeDoNav></WhatWeDoNav>

        <Testimonials></Testimonials>

        {/* <MapAndOpeningTimes></MapAndOpeningTimes> */}
      </div>
    </section>
  );
};

export default Home;

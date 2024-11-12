import React, { useEffect } from "react";

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
import WhatToExpect from "./WhatToExpect";
// import NewPatient from "../components/NewPatient";

const Home = () => {
    useEffect(() => {
        document.title = "Birmingham Chiropractic";
    }, []);


    return (
        <section>
            <Hero></Hero>
            <div className="home-container">
                <WhatWeDo></WhatWeDo>

                {/* <WelcomeVideo></WelcomeVideo> */}

                <WhatWeTreat></WhatWeTreat>

                <WhatToExpect></WhatToExpect>

                {/* <WhatWeDoNav></WhatWeDoNav> */}

                <Testimonials></Testimonials>

                {/* <MapAndOpeningTimes></MapAndOpeningTimes> */}
            </div>
        </section>
    );
};

export default Home;

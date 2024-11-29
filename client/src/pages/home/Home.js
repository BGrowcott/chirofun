import React, { useEffect } from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import TherapyCarousel from "./TherapyCarousel";
import WhatWeTreat from "./WhatWeTreat";
import MapAndOpeningTimes from "./MapAndOpeningTimes";
import WelcomeVideo from "./WelcomeVideo";
import Testimonials from "./Testimonials";
import WhatToExpect from "./WhatToExpect";
import MigraineTreatment from "./MigraineTreatment";

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

                <MigraineTreatment></MigraineTreatment>

                {/* <WhatToExpect></WhatToExpect> */}

                {/* <WhatWeDoNav></WhatWeDoNav> */}

                <Testimonials></Testimonials>

                {/* <MapAndOpeningTimes></MapAndOpeningTimes> */}
            </div>
        </section>
    );
};

export default Home;

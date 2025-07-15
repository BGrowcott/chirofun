import React, { useEffect } from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhatWeTreat from "./WhatWeTreat";
import Testimonials from "./Testimonials";
import WhatToExpect from "./WhatToExpect";
import MigraineTreatment from "./MigraineTreatment";
import OurClinic from "./OurClinic";

const Home = () => {
    useEffect(() => {
        document.title = "Birmingham Chiropractic";
    }, []);


    return (
        <section>
            <Hero></Hero>
            <div className="home-container">
                
                <Testimonials></Testimonials>

                <WhatWeDo></WhatWeDo>

                <WhatWeTreat></WhatWeTreat>

                <OurClinic/>

                {/* <MigraineTreatment></MigraineTreatment> */}
            </div>
        </section>
    );
};

export default Home;

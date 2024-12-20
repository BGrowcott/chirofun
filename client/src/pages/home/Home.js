import React, { useEffect } from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhatWeTreat from "./WhatWeTreat";
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

                <WhatWeTreat></WhatWeTreat>

                <MigraineTreatment></MigraineTreatment>

                <Testimonials></Testimonials>
            </div>
        </section>
    );
};

export default Home;

import React, { useEffect } from "react";
import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import WhatWeTreat2 from "./WhatWeTreat2";
import Testimonials from "./Testimonials";
import OurClinic from "./OurClinic";

const Home = () => {
    useEffect(() => {
        document.title = "Birmingham Chiropractic";
    }, []);


    return (
        <section>
            <div className="container-xxl p-0">
                <Hero></Hero>
                <Testimonials></Testimonials>
            </div>
            <div className="home-container">
                <WhatWeDo></WhatWeDo>

                <WhatWeTreat2 />

                <OurClinic/>

                {/* <MigraineTreatment></MigraineTreatment> */}
            </div>
        </section>
    );
};

export default Home;

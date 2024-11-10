import React, { useState } from "react";
import chiropractic from "../../images/new-imgs/whatWeChiro.jpeg";
import chiropractic2 from "../../images/new-imgs/therapy3.jpg";
import yoga from "../../images/new-imgs/whatWeYoga.jpeg";
import yoga2 from "../../images/new-imgs/yoga2.jpeg";
import orthotic from "../../images/new-imgs/ortho.jpeg";
import orthotic2 from "../../images/new-imgs/ortho2.jpg";
import orthotic3 from "../../images/new-imgs/ortho3.jpg";
import orthotic4 from "../../images/new-imgs/ortho4.jpg";
//import sportsRem from "../../images/new-imgs/sportmass.jpeg";
import sportsMass from "../../images/new-imgs/whatWeSportsMass.jpg";
import sportsMass2 from "../../images/new-imgs/sportsmass2.jpg";
import TherapyInfo from "./TherapyInfo";
import PageHeader from "../../components/PageHeader";
import WhatWeDoTabs from "./WhatWeDoTabs";
import WhatWeDoAccordion from "./WhatWeDoAccordion";

function WhatWeDo() {
    const therapyTypes = [
        {
            title: "Chiropractic",
            text: {
                p1: (
                    <div>
                        <p>
                            Chiropractic care is a form of complementary medicine that focuses on diagnosing, treating, and preventing musculoskeletal disorders, particularly those involving the
                            spine. Chiropractors use hands-on spinal manipulation and other therapeutic techniques to correct misalignments, or subluxations, in the spine. These adjustments aim to
                            restore proper alignment, which can relieve pain, reduce muscle tension, and improve nerve function. Many people seek chiropractic care for relief from back pain, neck
                            pain, headaches, and joint issues, as the adjustments can relieve pressure on nerves and improve overall musculoskeletal health.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            The benefits of chiropractic care extend beyond pain relief. By addressing the alignment of the spine, chiropractic adjustments can improve posture, enhance range of
                            motion, and promote better balance. This makes chiropractic care a valuable component of a holistic approach to health when combined with other practices like physical
                            therapy, exercise, or yoga. For instance, pairing chiropractic care with yoga can be especially beneficial, as yoga strengthens muscles and enhances flexibility, which can
                            help maintain spinal alignment between adjustments. Together, these practices not only relieve existing pain but also help prevent future injuries and imbalances,
                            supporting long-term health and improved quality of life.
                        </p>
                    </div>
                ),
            },
            therapyTypeCode: "chiropractic",
            image: chiropractic,
            image2: chiropractic2,
        },
        {
            title: "Yoga",
            text: {
                p1: (
                    <div>
                        <p>
                            Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation to promote mental, physical, and emotional well-being. Known for its
                            flexibility-enhancing and stress-relieving qualities, yoga provides a comprehensive approach to wellness by balancing strength, flexibility, and mindfulness. Regular yoga
                            practice helps improve joint mobility, muscle tone, and circulation, which can alleviate tension and increase overall body awareness. Yoga can be particularly effective for
                            those seeking to prevent injuries, manage stress, or improve their posture, as it builds core strength and teaches proper alignment—factors that support musculoskeletal
                            health.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            When combined with chiropractic care, the benefits of yoga can be significantly amplified. Chiropractic adjustments focus on aligning the spine and nervous system, which
                            can alleviate pain, reduce muscle tension, and improve nervous system function. By pairing yoga with chiropractic care, individuals can maintain these improvements between
                            adjustments. Yoga's emphasis on flexibility and core stability supports the spine and reduces pressure on joints, making chiropractic adjustments easier to achieve and
                            sustain. Together, yoga and chiropractic provide a powerful synergy, promoting a healthy spine, balanced musculature, and a resilient body that is more capable of handling
                            physical and mental stressors. This combination is highly effective for enhancing mobility, relieving chronic pain, and promoting a lasting sense of wellness.
                        </p>
                    </div>
                ),
            },
            therapyTypeCode: "yoga",
            image: yoga,
            image2: yoga2,
        },
        {
            title: "Sports Massage",
            text: {
                p1: (
                    <div>
                        <p>
                            Sports massages are a specialized form of massage therapy aimed at athletes and active individuals to help prevent injuries, improve performance, and facilitate faster
                            recovery. This type of massage uses a combination of deep tissue techniques, stretching, and targeted pressure to address the specific needs of the body under physical
                            strain. Sports massage is often applied to areas that experience repetitive stress or tension from activities like running, lifting, or team sports, helping to relieve
                            muscle stiffness and improve flexibility. It's commonly used both pre- and post-competition to prepare muscles for exertion or to aid in recovery by minimizing soreness and
                            reducing inflammation.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            The benefits of sports massage go beyond simple relaxation. By enhancing blood flow to muscles, it helps remove metabolic waste, which can reduce delayed onset muscle
                            soreness (DOMS) and facilitate quicker muscle repair. This can be especially valuable in intense training schedules, allowing athletes to maintain performance and prevent
                            overuse injuries. Sports massage can also aid in identifying muscle imbalances or areas of tightness that may predispose athletes to injury, enabling them to address these
                            issues proactively. Overall, sports massage is a powerful tool for optimizing physical performance, promoting quicker recovery, and improving long-term musculoskeletal
                            health, making it an essential component of many athletes' routines.
                        </p>
                    </div>
                ),
            },
            therapyTypeCode: "sportsMassage",
            image: sportsMass,
            image2: sportsMass2,
        },
        {
            title: "Orthotics",
            text: {
                p1: (
                    <div>
                        <p>
                            Orthotics are custom-made devices designed to support, align, or improve the functioning of various body parts, especially the feet and lower limbs. Typically inserted into
                            shoes, foot orthotics are among the most common types and can range from simple, over-the-counter insoles to specialized, custom-fitted devices prescribed by healthcare
                            professionals. Orthotics are often recommended for individuals experiencing foot pain, plantar fasciitis, or issues related to flat feet, high arches, or uneven gait. They
                            work by redistributing pressure on the feet, aligning the body more effectively, and enhancing overall stability, which can improve both comfort and mobility.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            The benefits of orthotics extend beyond foot comfort. By supporting proper foot and lower limb alignment, orthotics can help reduce strain on the knees, hips, and lower
                            back, alleviating pain that may stem from poor posture or gait abnormalities. For athletes, orthotics can offer added stability, cushioning, and support, potentially
                            preventing injuries associated with repetitive motions or high impact on the joints. Orthotics can also be transformative for people with chronic conditions, like diabetes,
                            by reducing pressure points and minimizing the risk of foot ulcers. In summary, orthotics provide targeted support that not only addresses specific biomechanical issues but
                            also promotes a healthier, more aligned posture and movement, improving overall quality of life.
                        </p>
                    </div>
                ),
            },
            therapyTypeCode: "orthotic",
            image: orthotic3,
            image2: orthotic4,
        },
    ];

    const [selectedTherapy, setSelectedTherapy] = useState(therapyTypes[0]);

    const handleTherapySelect = (therapyType) => {
        setSelectedTherapy(therapyType);
    };

    return (
        <section className="border-top border-1 border-secondary">
            <div className="container-xxl">
                <div className="p-md-3">
                    <PageHeader text={"What We Do"}></PageHeader>
                    <div className="bg-warm p-sm-3 p-1 py-3 mt-1">
                        <div className="d-none d-lg-block">
                            <WhatWeDoTabs therapyTypes={therapyTypes}></WhatWeDoTabs>
                        </div>

                        <div className="d-lg-none d-block">
                            <WhatWeDoAccordion therapyTypes={therapyTypes}></WhatWeDoAccordion>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;

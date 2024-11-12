import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        document.title = "Birmingham Chiropractic - What We Do";
    }, []);

    const therapyTypes = [
        {
            title: "Chiropractic",
            text: {
                p1: (
                    <div>
                        <p>
                            Chiropractors are best known for manual treatments such as spinal manipulation, where they use their hands to free stiff or restricted joints, or mobilisation, which is the
                            gradual moving of joints. But they may also use other recommended treatments such as certain types of acupuncture, electrotherapy, stretching exercises and rehabilitation,
                            all of which form part of a chiropractor's package of care. Your chiropractor may also offer lifestyle advice to help recovery and to prevent repeated episodes of back
                            pain.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            If your chiropractor does not think you can be helped by chiropractic treatment, you may be referred back to your GP or to another health professional. Chiropractors do not
                            prescribe medication, so if this is needed, you may be referred back to your GP. As chiropractors support a joined-up approach to care, they may ask if they can send a
                            brief report to your GP.
                        </p>
                        <p>
                            The use of the title Chiropractor is statutorily regulated and thus protected by law. This means that Chiropractors have to be registered with The General Chiropractic
                            council.
                        </p>
                        <div>
                            For more information:
                            <ul className="mt-2 fw-bold">
                                <li>
                                    <a className="text-dark" href="https://www.gcc-uk.org/" target="_blank">
                                        The General Chiropractic Council
                                    </a>
                                </li>
                                <li>
                                    <a className="text-dark" href="https://rcc-uk.org/" target="_blank">
                                        The Royal College of Chiropractors
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                            Orthotics are shoe inserts for biomechanical problems of Gait or walking. We offer a range of orthotics for those who would benefit from their use. From simple heel lifts
                            and off-the-shelf inserts to custom-made polypropylene NHS grade orthotics manufactured from individual prescription.
                        </p>

                        <p>
                            Your feet are the foundation for the normal balance and alignment of your body. Structural problems in the feet, even the slightest imbalance, can alter the way that you
                            walk and cause many different problems. Common symptoms of problems with gait are localised foot pain, knee pain, plantar faciitis, bunions, hammer toes, pain in the arch
                            of the foot and even low back pain and hip pain.
                        </p>
                    </div>
                ),
                p2: (
                    <div>
                        <p>
                            Faulty foot mechanics can alter the even distribution of your body weight, whilst standing, walking or running, and create an increased load on joints and muscles elsewhere
                            in the body. Foot orthotics help to correct any imbalance by stabilising the bones of your feet and bring other bones and joints back into proper alignment.
                        </p>
                    </div>
                ),
            },
            therapyTypeCode: "orthotic",
            image: orthotic3,
            image2: orthotic4,
        },
    ];

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

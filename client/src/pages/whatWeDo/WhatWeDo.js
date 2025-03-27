import React, { useState, useEffect } from "react";
import chiropractic from "../../images/whatWeChiro.jpeg";
import chiropractic2 from "../../images/therapy3.jpg";
import yoga from "../../images/whatWeYoga.jpeg";
import yoga2 from "../../images/yoga2.jpeg";
import orthotic3 from "../../images/ortho3.jpg";
import orthotic4 from "../../images/ortho4.jpg";
import sportsMass from "../../images/whatWeSportsMass.jpg";
import sportsMass2 from "../../images/sportsmass2.jpg";
import mediAesthetics1 from "../../images/medi-aesthetics1.jpeg";
import mediAesthetics2 from "../../images/medi-aesthetics2.jpeg";
import vitaminTherapy7 from "../../images/vitaminTherapy7.jpg";
import vitaminTherapy8 from "../../images/vitaminTherapy8.jpg";
import PageHeader from "../../components/utils/PageHeader";
import WhatWeDoTabs from "./WhatWeDoTabs";
import WhatWeDoAccordion from "./WhatWeDoAccordion";
import PageContainer from "../../components/utils/PageContainer";
import ContentBox from "../../components/utils/ContentBox";
import { useGlobalContext } from "../../utils/GlobalState";

function WhatWeDo() {
	useEffect(() => {
		document.title = "What We Do - Birmingham Chiropractic";
	}, []);

	const [state, dispatch] = useGlobalContext();

	const therapyTypes = [
		{
			title: "Chiropractic",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>
								<strong>Chiropractors</strong> are best known for manual treatments such as spinal manipulation, where they use their hands to
								free stiff or restricted joints, or mobilisation, which is the gradual moving of joints.
							</p>
						</div>
						<p>
							They may also use other recommended treatments such as certain types of acupuncture, electrotherapy, stretching exercises, and
							rehabilitation, all of which form part of a chiropractor's <em>package of care</em>. Your chiropractor may also offer lifestyle
							advice to help recovery and prevent repeated episodes of back pain.
						</p>
					</div>
				),
				p2: (
					<div>
						<p>
							If your chiropractor does not think you can be helped by chiropractic treatment, you may be referred to your GP or another health
							professional. Chiropractors do not prescribe medication, so if this is needed, you may be referred back to your GP. As chiropractors
							support a joined-up approach to care, they may ask if they can send a brief report to your GP.
						</p>
						<p>
							The title <strong>Chiropractor</strong> is statutorily regulated and thus protected by law. This means that Chiropractors must be
							registered with The General Chiropractic Council.
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
			imageAlt: "Chiropractor demostrates spinal manipulation",
			image2Alt: "Dr Austin Everill demonstrates spinal manipulation in his clinic.",
			image2: chiropractic2,
		},
		{
			title: "Medi-Aesthetics",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>Book your consultation now and experience the difference!</p>
						</div>
						<div>
							<h3 className="h5 fw-bold">Migraine Treatment.</h3>
							<p>
								We offer the latest clinically proven medical treatment for migraines, as recommended by the National Institute of Clinical
								Excellence. This procedure reduces the hypersensitivity of the nerves that trigger migraines. This well-researched method uses
								very fine needles to inject at exact points. We prioritise your health and comfort, striving to make this cutting-edge treatment
								affordable and accessible. Don't let migraines control your life. Take the first step towards relief today.
							</p>
						</div>
					</div>
				),
				p2: (
					<div>
						<div>
							<h3 className="h5 fw-bold">Other Aesthetic Procedures.</h3>
							<p>
								Dr Austin Everill has established Precision Aesthetics at our Birmingham clinic. All our staff are highly trained and provide
								expert patient care. We use an effective, non-surgical, anti-wrinkle procedure. This technique uses neuromodulators, which is
								the most popular method globally, as well as having a long established safety record.
							</p>
						</div>
						<p>
							We aim to make all our treatments affordable for patients. Please enquire about our full range of treatments and competitive
							pricing.{" "}
							<a className="text-dark fw-bold" href="tel:07898903772">
								Call
							</a>{" "}
							or{" "}
							<a className="text-dark fw-bold" href={state.bookingUrl} target="_blank">
								book online.
							</a>
						</p>
					</div>
				),
			},
			therapyTypeCode: "medi-aesthetics",
			image: mediAesthetics1,
			imageAlt:
				"Demonstration of a medi-aesthetics procedure, a woman lies back with her eyes closed as the doctor administers the injection just above the eyebrows.",
			image2Alt:
				"Demonstration of a medi-aesthetics procedure, a man lies back with his eyes closed as the doctor administers the injection just above the eyebrows.",
			image2: mediAesthetics2,
		},
		{
			title: "Vitamin Therapy",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>
								<strong>Injections, or IV Vitamin Therapy</strong>, involves delivering micronutrients directly into the bloodstream for superior and more
                                complete absorption (bypassing the gut). Treat deficiencies and detoxification, reduce inflammation, boost energy levels
                                and reduce fatigue, enhance immune system function, and improve mental clarity, energy, and focus.
							</p>
						</div>
						<div>
							<h3 className="h5 fw-bold">Vitamin B12 injections.</h3>
							<p>
								Vitamin B12 is essential for maintaining energy, mental clarity, and a healthy nervous system. Our Vitamin B12 injections offer
								a fast and effective way to support your overall well-being. By bypassing the digestive system, these injections ensure maximum
								absorption and deliver noticeable results fast and effectively.
							</p>
							<div>
								<h4 className="h6 fw-bold">Key Benefits of B12 Injections:</h4>
								<ul>
									<li>
										<strong>Boost Energy Levels:</strong> Say goodbye to fatigue and embrace a revitalised, energetic you.
									</li>
									<li>
										<strong>Enhance Cognitive Function:</strong> Support sharper focus, improved memory, and mental clarity.
									</li>
									<li>
										<strong>Improve Mood:</strong> B12 helps regulate neurotransmitters, promoting emotional balance.
									</li>
									<li>
										<strong>Support a Healthy Nervous System:</strong> Vital for nerve function and the production of red blood cells and
										DNA.
									</li>
								</ul>
								<p>
									These injections are especially beneficial for individuals with <strong>pernicious anaemia, digestive disorders,</strong> or
									anyone struggling to absorb B12 from food or supplements. They can also aid metabolism and alleviate symptoms like weakness
									or nerve pain.
								</p>
							</div>
						</div>
					</div>
				),
				p2: (
					<div>
						<div>
							<h3 className="h5 fw-bold">Glutathione</h3>

							<p>
								Glutathione booster injections are a powerful antioxidant therapy designed to promote detoxification, improve skin health &
								enhance overall wellness. Glutathione, called the "master antioxidant" helps neutralise free radicals, reduce oxidative stress &
								support the body's natural detoxification process.
							</p>
						</div>

						<div>
							<h3 className="h5 fw-bold">Vitamin C Injections</h3>

							<p>
								A powerful therapy to strengthen the immune system, improve skin health & combat oxidative stress. This vital antioxidant,
								supports collagen production, boosts energy levels & fights off infection.
							</p>
						</div>

						<div>
							<h3 className="h5 fw-bold">Combination Injection Therapy</h3>

							<p>
								For combination injection therapy, it's not necessary to book separately. You can request your preference when using the online
								booking system for one of the single injection therapies or call us to book.
							</p>
						</div>
					</div>
				),
			},
			therapyTypeCode: "vitamin-therapy",
			image: vitaminTherapy7,
			imageAlt:
				"Demonstration of a medi-aesthetics procedure, a woman lies back with her eyes closed as the doctor administers the injection just above the eyebrows.",
			image2Alt:
				"Demonstration of a medi-aesthetics procedure, a man lies back with his eyes closed as the doctor administers the injection just above the eyebrows.",
			image2: vitaminTherapy8,
		},
		{
			title: "Yoga",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>
								Along with Chiropractic, <strong>Yoga</strong> is recommended by the National Institute of Clinical Excellence as part of a
								first basis approach to Back Pain care.
							</p>
						</div>
					</div>
				),
				p2: (
					<div>
						<p>
							Claire came to yoga after years of back pain. The yoga practice helped with the back pain, but the mindfulness and inner calm kept
							Claire interested and coming back for more. Claire teaches at various studios across Birmingham and offers online/in-person 1-2-1s.
						</p>
						<p>
							In a 1-2-1 session, we will examine how yoga techniques can support your current treatment with Birmingham Chiropractic. We will
							explore how you can improve flexibility, mobility, posture, and increasing strength.
						</p>
						<p>
							You can also book a 1-2-1 to help with meditation/mindfulness or to prepare you for attending a class at a yoga studio. Please call
							to book.
						</p>
					</div>
				),
			},
			therapyTypeCode: "yoga",
			image: yoga,
			imageAlt: "Demonstration of Three-Legged Downward Dog, also known as Tri Pada Adho Mukha Svanasana",
			image2Alt: "Demonstration of The side plank pose, also known as Vasisthasana, is a balancing yoga pose that strengthens the core and shoulders.",
			image2: yoga2,
		},
		{
			title: "Sports Massage",
			text: {
				p1: (
					<div>
						<p className="fs-4">
							<strong>Sports massage</strong> is a specialised form of massage therapy aimed at active individuals to help prevent injuries,
							improve performance, and facilitate faster recovery.
						</p>
						<p>
							However, sports massage is for more than just the active sportsperson. Whether you are a stay-at-home parent, have an office-based
							job, or are a manual worker, we provide practical and beneficial treatment for all individuals.
						</p>
						<p>
							We will aim to correct problems and imbalances in soft tissue structures caused by trauma, repetitive movements or physical activity
							using various massage techniques. In doing so, we bring clients back to the optimal levels of functional, occupational and
							sports-specific fitness - regardless of age and ability.
						</p>
					</div>
				),
				p2: (
					<div>
						<p>
							The benefits of sports massage go beyond simple relaxation: Reduced muscle tension, improved circulation, injury prevention,
							improved recovery, pain management, enhanced performance, and stress relief.
						</p>
					</div>
				),
			},
			therapyTypeCode: "sports-massage",
			image: sportsMass,
			imageAlt: "Demonstration of a sports massage. The masseur is shown massaging the calf muscle.",
			image2Alt: "Demonstration of a sports massage. The masseur is shown massaging the neck.",
			image2: sportsMass2,
		},
		{
			title: "Orthotics",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>
								<strong>Orthotics</strong> are shoe inserts for biomechanical problems of gait or walking.
							</p>
						</div>
						<p>
							We offer a range of orthotics for those who would benefit from their use, from simple heel lifts and off-the-shelf inserts to
							custom-made polypropylene NHS-grade orthotics - manufactured from individual prescriptions.
						</p>
						<p>
							Your feet are the foundation for your body's balance and alignment. Structural problems in the feet, even the slightest imbalance,
							can alter how you walk and cause many problems. Common symptoms of problems with gait are localised foot pain, knee pain, plantar
							fasciitis, bunions, hammer toes, pain in the arch of the foot and even low back pain and hip pain.
						</p>
					</div>
				),
				p2: (
					<div>
						<p>
							Faulty foot mechanics can alter the even distribution of your body weight while standing, walking or running and create an increased
							load on joints and muscles elsewhere in the body. Foot orthotics help to correct any imbalance by stabilising the bones of your feet
							and bringing other bones and joints back into proper alignment.
						</p>
					</div>
				),
			},
			therapyTypeCode: "orthotics",
			image: orthotic3,
			imageAlt: "A persons feet wearing white trainers.",
			image2Alt: "Demonstration of a orthotics being fitted",
			image2: orthotic4,
		},
	];

	return (
		<PageContainer>
			<PageHeader text={"What We Do"}></PageHeader>
			<ContentBox>
				<div className="d-none d-xl-block">
					<WhatWeDoTabs therapyTypes={therapyTypes}></WhatWeDoTabs>
				</div>

				<div className="d-xl-none d-block">
					<WhatWeDoAccordion therapyTypes={therapyTypes}></WhatWeDoAccordion>
				</div>
			</ContentBox>
		</PageContainer>
	);
}

export default WhatWeDo;

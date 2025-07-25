import React, { useState, useEffect } from "react";
import chiropractic from "../../images/whatWeChiro.jpeg";
import chiropractic2 from "../../images/therapy3.jpg";
import chiropractic3 from "../../images/chiroNew.png";
import chiropractic4 from "../../images/chiroNew2.png";
import chiropractic5 from "../../images/chiropractic.jpeg";
import xRay from "../../images/xray.jpeg";
import yoga from "../../images/whatWeYoga.jpeg";
import yoga2 from "../../images/yoga2.jpeg";
import sportsMass from "../../images/whatWeSportsMass.jpg";
import sportsMass2 from "../../images/sportsmass2.jpg";
import mediAesthetics1 from "../../images/medi-aesthetics1.jpeg";
import neuromodulation from "../../images/neuromodulation.jpeg";
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
						<h2>What is Chiropractic?</h2>
						<div className="">
							<p>
								<strong>Chiropractic</strong> is concerned with diagnosing, treating and preventing disorders of the musculoskeletal system and
								the effects of these conditions on the nervous system and general health. Chiropractic is now the UK's third largest primary
								healthcare profession, behind Medicine and Dentistry.
							</p>
						</div>
					</div>
				),
				p2: (
					<div>
						<p>
							As Primary Healthcare Providers, you do not need a GP referral to see a Chiropractor. Chiropractors offer safe and gentle treatments
							for everyone from young children to older adults. Your practitioner will tailor a specific care program to suit your needs and
							symptoms.
						</p>
						<p>
							Chiropractors are best known for using manual therapy, such as spinal manipulation and mobilisation, to improve joint mobility and
							function. They may use other recommended techniques such as electrotherapy, stretching, sports massage, exercise and nutritional
							advice as part of a tailored care package.
						</p>
						<p>
							The title Chiropractor is statutorily regulated, and this means Chiropractors must be registered with the General Chiropractic
							Council
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
			image2: chiropractic5,
			//image3: chiropractic4,
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
			title: "Neuromodulation",
			text: {
				p1: (
					<div>
						<h3 className="h5 fw-bold">Treatments We Offer:</h3>
						<div>
							<ul>
								<li>Migraine Relief - using an NHS-recommended treatment with neuromodulators to prevent migraine symptoms.</li>
								<li>Jaw Pain & Tension Headaches</li>
								<li>Teeth Grinding (Bruxism)</li>
								<li>TMJ Disorder</li>
							</ul>
						</div>

						<div>
							<p>
								Neuromodulation (achieved through painless injections) can alleviate jaw pain and tension, including symptoms of Bruxism (teeth
								grinding) and TMJ disorders, by relaxing the masseter muscle.
							</p>
						</div>

						<h3 className="h5 fw-bold">Benefits of these treatments:</h3>
						<div>
							<ol>
								<li>
									Treatment is convenient and can be carried out to suit your schedule. Typical treatment time is usually no longer than 30
									minutes.
								</li>
								<li>No invasive procedures. You can generally go back to normal activities once the treatment is complete.</li>
								<li>
									Effective treatment. Noticeable results can typically be seen in a few days to a week, with full effects becoming apparent
									after 2-4 weeks.
								</li>
							</ol>

							<p>
								All the above treatments require a consultation and a small deposit paid upfront. This will be deducted from the total amount.
								You can book online or call to discuss.
							</p>
						</div>
					</div>
				),
				p2: (
					<div>
						<div>
							<h3 className="h5 fw-bold">Aesthetic Procedures.</h3>
							<p>
								Dr Austin Everill has established Precision Aesthetics at our Birmingham clinic. All our staff are highly trained and provide
								expert patient care. We use an effective, non-surgical, anti-wrinkle procedure. This technique uses neuromodulators, which is
								the most popular method globally, as well as having a long-established safety record.
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
			therapyTypeCode: "neuromodulator-treatments",
			image: mediAesthetics1,
			imageAlt:
				"Demonstration of a medi-aesthetics procedure, a woman lies back with her eyes closed as the doctor administers the injection just above the eyebrows.",
			image2Alt: "Demonstration of using neuromodulators, a doctor administers the injection just above the eyebrows.",
			image2: neuromodulation,
		},
		{
			title: "Vitamin Therapy",
			text: {
				p1: (
					<div>
						<div className="fs-4">
							<p>
								<strong>Injections, or IV Vitamin Therapy</strong>, involves delivering micronutrients directly into the bloodstream for
								superior and more complete absorption (bypassing the gut). Treat deficiencies and detoxification, reduce inflammation, boost
								energy levels and reduce fatigue, enhance immune system function, and improve mental clarity, energy, and focus.
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
										<strong>Reduce stress and fatique</strong> Improve energy and cell metabolism.
									</li>
									<li>
										<strong>Enhance cognitive function:</strong> Support sharper focus, improved memory, and mental clarity.
									</li>
									<li>
										<strong>Improve mood:</strong> B12 helps regulate neurotransmitters, promoting emotional balance.
									</li>
									<li>
										<strong>Support a healthy nervous system:</strong> Vital for nerve function and the production of red blood cells and
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
	];

	return (
		<PageContainer>
			<PageHeader text={"What We Do"}></PageHeader>
			<div className="d-none d-xl-block">
				<div className="my-4">
					<h2>What is Chiropractic?</h2>

					<div className="row mb-4">
						<div className="col">
							<img className="img-fluid white-border shadow" src={chiropractic}></img>
						</div>
						<div className="col-9 fs-5">
							<p>
								<strong>Chiropractic</strong> is concerned with diagnosing, treating and preventing disorders of the musculoskeletal system and
								the effects of these conditions on the nervous system and general health. Chiropractic is now the UK's third largest primary
								healthcare profession, behind Medicine and Dentistry.
							</p>
							<p>
								As Primary Healthcare Providers, you do not need a GP referral to see a Chiropractor. Chiropractors offer safe and gentle
								treatments for everyone from young children to older adults. Your practitioner will tailor a specific care program to suit your
								needs and symptoms.
							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-8 fs-5">
							<p>
								Chiropractors are best known for using manual therapy, such as spinal manipulation and mobilisation, to improve joint mobility
								and function. They may use other recommended techniques such as electrotherapy, stretching, sports massage, exercise and
								nutritional advice as part of a tailored care package.
							</p>
							<p>
								The title Chiropractor is statutorily regulated, and this means Chiropractors must be registered with the General Chiropractic
								Council
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
						<div className="col">
							<img className="img-fluid white-border shadow" src={chiropractic5}></img>
						</div>
					</div>
				</div>
				<hr/>
			</div>
			<div>
				<div className="d-none d-xl-block">
					<h2>Other treatments</h2>
				</div>
				<ContentBox>
					<div className="d-none d-xl-block">
						<WhatWeDoTabs therapyTypes={therapyTypes.slice(1)}></WhatWeDoTabs>
					</div>

					<div className="d-xl-none d-block">
						<WhatWeDoAccordion therapyTypes={therapyTypes}></WhatWeDoAccordion>
					</div>
				</ContentBox>
			</div>
		</PageContainer>
	);
}

export default WhatWeDo;

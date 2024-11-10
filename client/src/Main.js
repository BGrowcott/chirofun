import { Route, Routes, useLocation } from "react-router-dom";
import Fees from "./pages/fees/Fees";
import Home from "./pages/home/Home";
import MeetTheTeam from "./pages/meetTheTeam/MeetTheTeam";
import WhatWeDo from "./pages/whatWeDo/WhatWeDo";
import { useEffect, useState } from "react";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

function Main() {
	// const [buttonBgColour, setButtonColour] = useState("btn-dark");
	// const [buttonFontSize, setButtonFontSize] = useState("");
	// const [buttonFontColour, setButtonFontColour] = useState("");

	// useEffect(() => {
	// 	// Find carousel/blue section
	// 	const handleScroll = () => {
	// 		const blueSection = document.querySelector(".carousel-section");
	// 		const button = document.querySelector(".floating-button");

	// 		if (!blueSection || !button) return;

	// 		// get coordinates of top edge
	// 		const blueSectionRect = blueSection.getBoundingClientRect();
	// 		const buttonRect = button.getBoundingClientRect();

	// 		// check if position of button top/bottom edge matches blue section top/bottom edge and update state
	// 		if (buttonRect.top >= blueSectionRect.top && buttonRect.bottom <= blueSectionRect.bottom) {
	// 			setButtonColour("bg-light");
	// 			setButtonFontColour("text-dark");
	// 			setButtonFontSize("fw-bold");
	// 		} else {
	// 			setButtonColour("btn-dark");
	// 			setButtonFontColour("text-light");
	// 			setButtonFontSize("fw-normal");
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	return (
		<main>
			<div className="d-none d-md-block">
				<div
					className="position-fixed z-1 floating-button"
					style={{
						transform: "rotate(270deg)",
						right: -41,
						top: "55%",
						zIndex: "10"						
					}}
				>
					<a
						target="_blank"
						href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
						className={`rounded-0 rounded-top btn btn-lg btn-warm`}
						style={{boxShadow: "-2px -2px 7px black"}}
					>
						Book Now
					</a>
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fees" element={<Fees />} />
				<Route path="/the-team" element={<MeetTheTeam />} />
				<Route path="/what-we-do" element={<WhatWeDo />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</main>
	);
}
export default Main;

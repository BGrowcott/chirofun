import { Route, Routes, useLocation } from "react-router-dom";
import Fees from "./pages/fees/Fees";
import Home from "./pages/home/Home";
import MeetTheTeam from "./pages/meetTheTeam/MeetTheTeam";
import WhatWeDo from "./pages/whatWeDo/WhatWeDo";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import PageNotFound from "./components/PageNotFound";

function Main() {
	return (
		<main>
			<aside className="d-none d-md-block">
				<div
					className="position-fixed z-1 floating-button"
					style={{
						transform: "rotate(270deg)",
						right: -51, 
						top: "55%",
						zIndex: "10",
					}}
				>
					<a
						target="_blank"
						href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/"
						className={`rounded-0 rounded-top btn btn-lg btn-warm`}
						style={{ boxShadow: "-2px -2px 7px black" }}
					>
						Book Online
					</a>
				</div>
			</aside>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fees" element={<Fees />} />
				<Route path="/the-team" element={<MeetTheTeam />} />
				<Route path="/what-we-do/:therapy" element={<WhatWeDo />} />
				<Route path="/what-we-do/" element={<WhatWeDo />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
}
export default Main;

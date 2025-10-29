import { Route, Routes, useLocation } from "react-router-dom";
import Fees from "./pages/fees/Fees";
import Home from "./pages/home/Home";
import MeetTheTeam from "./pages/meetTheTeam/MeetTheTeam";
import WhatWeDo from "./pages/whatWeDo/WhatWeDo";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import PageNotFound from "./components/PageNotFound";
import { useGlobalContext } from "./utils/GlobalState";
import reviewsJson from "./utils/reviews.json"; // incase api call to google fails
import { LOAD_REVIEWS } from "./utils/actions";

function Main() {

  const [state, dispatch] = useGlobalContext();

	useEffect(() => {
		if (state.reviews.length) {
			// if reviews exists in the global context we don't need to call the api again
			//setReviews([...state.reviews]);
			return;
		}

		(async () => {
			try {
				const res = await fetch("/api/reviews");
				const json = await res.json();
				dispatch({ type: LOAD_REVIEWS, reviews: [...json.reviews], rating: json.rating, userRatingCount: json.userRatingCount });

				// const schemaData = {
				// 	"@context": "https://schema.org",
				// 	"@type": "Chiropractic",
				// 	"name": "Birmingham Chiropractic",
				// 	"description": "Birmingham Chiropractic is a well-established chiropractic clinic staffed by professional, family-centered, and GCC Registered Chiropractors. Book online or call.",
				// 	"url": "https://www.birminghamchiropractic.uk.com",
				// 	"telephone": "+447898903772",
				// 	"founder": {
				// 	  "@type": "Person",
				// 	  "name": "Dr. Austin Everill"
				// 	},
				// 	"address": {
				// 	  "@type": "PostalAddress",
				// 	  "streetAddress": "264 Alcester Rd South",
				// 	  "addressLocality": "Kings Heath",
				// 	  "addressRegion": "Birmingham",
				// 	  "postalCode": "B14 6DR",
				// 	  "addressCountry": "UK"
				// 	},
				// 	"aggregateRating": {
				// 	  "@type": "AggregateRating",
				// 	  "ratingValue": json.rating,
				// 	  "reviewCount": json.userRatingCount
				// 	}
				//   };
			  
				//   // Create <script type="application/ld+json"> tag dynamically
				//   const script = document.createElement("script");
				//   script.type = "application/ld+json";
				//   script.text = JSON.stringify(schemaData);
				//   document.head.appendChild(script);

			} catch (error) {
        // fallback if api fails
        dispatch({ type: LOAD_REVIEWS, reviews: [...reviewsJson], rating: 5, userRatingCount: 250 });
      }
		})();
	}, []);

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
            href={state.bookingUrl}
            className={`rounded-0 rounded-top btn btn-lg btn-warm`}
            style={{ boxShadow: "-2px -2px 7px black" }}
          >
            Book online
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

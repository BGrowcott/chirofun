import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import MeetTheTeam from "./pages/meetTheTeam/MeetTheTeam";
import Portfolio from "./pages/Portfolio";
import { useEffect, useState } from "react";
import Testimonials from "./pages/Testimonials";

function Main() {
  const [buttonBgColour, setButtonColour] = useState("btn-dark");
  const [buttonFontSize, setButtonFontSize] = useState("");
  const [buttonFontColour, setButtonFontColour] = useState("");

  useEffect(() => {
    // Find carousel/blue section
    const handleScroll = () => {
      const blueSection = document.querySelector(".carousel-section");
      const button = document.querySelector(".floating-button");

      if (!blueSection || !button) return;

      // get coordinates of top edge
      const blueSectionRect = blueSection.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      // check if position of button top/bottom edge matches blue section top/bottom edge and update state
      if (
        buttonRect.top >= blueSectionRect.top &&
        buttonRect.bottom <= blueSectionRect.bottom
      ) {
        setButtonColour("bg-light");
        setButtonFontColour("text-dark");
        setButtonFontSize("fw-bold");
      } else {
        setButtonColour("btn-dark");
        setButtonFontColour("text-light");
        setButtonFontSize("fw-normal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <div
        className="position-fixed z-1 floating-button"
        style={{
          transform: "rotate(270deg)",
          right: -41,
          top: "55%",
          zIndex: "10",
        }}
      >
        <a
          target="_blank"
          href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true"
          className={`rounded-0 rounded-top btn btn-lg ${buttonBgColour} ${buttonFontColour} ${buttonFontSize}`}
        >
          Book Now
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/the-team" element={<MeetTheTeam />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </main>
  );
}
export default Main;

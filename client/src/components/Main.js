import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import About from "../pages/about/About";

function Main() {
    return (
        <main>
            <div className="position-fixed top-50 z-1" style={{transform: "rotate(270deg)", right: -40}}><a target="_blank" href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/booking?menu=true" className="rounded-0 rounded-top btn btn-lg btn-dark">Book Now</a></div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}
export default Main;

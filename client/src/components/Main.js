import { Route, Routes, useLocation } from "react-router-dom";
import backgroundImage from "../images/FoodCollageMed.jpg";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

function Main() {
    const root = document.querySelector("#root");
    const location = useLocation();
    if (location.pathname === "/contact") {
        root.style.backgroundImage = `url(${backgroundImage})`;
        root.style.backgroundSize = `cover`;
    } else {
        root.style.backgroundImage = 'none'
    }

    return (
        <main className="mt-3">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
export default Main;

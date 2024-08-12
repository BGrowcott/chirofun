import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
export default Main;

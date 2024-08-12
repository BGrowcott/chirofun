import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import About from "../pages/about/About";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
export default Main;

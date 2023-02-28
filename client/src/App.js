import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./utils/GlobalState";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExampleModal from "./components/modals/exampleModal";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <GlobalProvider>
                <Header />
                <main className="mt-3">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <ExampleModal />
            </GlobalProvider>
        </Router>
    );
}

export default App;

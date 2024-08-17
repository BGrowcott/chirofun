import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GlobalProvider } from "./utils/GlobalState";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

import ExampleModal from "./components/modals/exampleModal";
import Contact from "./pages/Contact";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Header />
        <Main />
        <Footer />
        <ExampleModal />
      </GlobalProvider>
    </Router>
  );
}

export default App;

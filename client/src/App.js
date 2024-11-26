import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./utils/GlobalState";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import ExampleModal from "./components/modals/exampleModal";
import Main from "./Main";

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

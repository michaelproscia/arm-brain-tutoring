import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;

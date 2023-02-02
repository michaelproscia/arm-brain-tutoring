import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [booking, setBooking] = useState("");

  return (
    <main>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pricing"
              element={<Pricing setBooking={setBooking} />}
            />
            <Route path="/contact" element={<Contact booking={booking} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </main>
  );
}

export default App;

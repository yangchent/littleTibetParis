import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// Import views
import Home from "./views/home";
import About from "./views/about";
import Boutique from "./views/boutique";
import Restaurant from "./views/restaurant";
import Ngo from "./views/ngo";
import Contact from "./views/contact";
import Error404 from "./views/error404";
import Faq from "./views/faq";

// Import components
import Navbar from "./components/navbar";
import Footer from './components/footer';

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/ngo" element={<Ngo />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "../Style/Index.css";
import InfoBlock from "./Info";
import Work from "./Work";
import Footer from "./Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MyWork from "../pages/MyWork";
import Company from "../pages/Company";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Company />} />
          <Route path="/my-work" element={<MyWork/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

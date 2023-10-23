import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../Style/Index.css";
// import InfoBlock from "./Info";
// import Work from "./Work";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MyWork from "../pages/MyWork";
import Company from "../pages/Company";
import AdminPanel from "../Admin/AdminPanel";
import Landing from "./Landing";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} >
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Company />} />
            <Route path="my-work" element={<MyWork/>} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Landing() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
